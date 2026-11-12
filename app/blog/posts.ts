// Blog post content. Each post is rendered statically at /blog/<slug>.
// Content is a list of simple blocks so no markdown dependency is needed.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang: string; code: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: Block[];
}

export const posts: BlogPost[] = [
  {
    slug: "scalable-apis-nodejs-nestjs",
    title: "Building Scalable APIs with Node.js and NestJS",
    description:
      "Build scalable REST APIs with Node.js and NestJS: feature modules, DTO validation, stateless design, caching, pagination, rate limiting and health checks.",
    excerpt:
      "Learn how to create robust, scalable APIs using Node.js and the NestJS framework with best practices and real-world examples.",
    date: "2025-10-01",
    readTime: "8 min read",
    tags: ["Node.js", "NestJS", "API Development"],
    content: [
      {
        type: "p",
        text: "Node.js is fast to start with, but an Express app that grows without structure gets hard to change and hard to scale. NestJS adds the structure: modules, dependency injection and decorators, on top of the same Node.js runtime. This guide covers the patterns that keep a NestJS API maintainable and ready to scale horizontally.",
      },
      { type: "h2", text: "1. Organise the API by feature modules" },
      {
        type: "p",
        text: "Group code by business feature (users, orders, payments), not by technical layer. Each module owns its controller, service and data access, and exports only what other modules need. This keeps boundaries clear and makes it easy to split a module into its own service later.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// orders/orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService], // only what other modules need
})
export class OrdersModule {}`,
      },
      { type: "h2", text: "2. Validate every request with DTOs" },
      {
        type: "p",
        text: "Never trust input. Define a DTO class per request body with class-validator decorators, and enable a global ValidationPipe. With whitelist enabled, unknown fields are stripped, so clients cannot sneak extra properties into your database writes.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// create-order.dto.ts
import { IsInt, IsPositive, IsString, Length } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @Length(1, 64)
  productId: string;

  @IsInt()
  @IsPositive()
  quantity: number;
}

// main.ts
app.useGlobalPipes(
  new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
);`,
      },
      { type: "h2", text: "3. Keep the API stateless" },
      {
        type: "p",
        text: "Horizontal scaling means running several copies of the API behind a load balancer. That only works if any instance can serve any request. Do not keep sessions, uploaded files or caches in process memory. Use JWTs or a shared session store, object storage (such as S3) for files, and Redis for shared cache and locks.",
      },
      { type: "h2", text: "4. Paginate every list endpoint" },
      {
        type: "p",
        text: "An endpoint that returns all rows works in development and fails in production. Always cap the page size. For large or fast-changing tables, prefer cursor (keyset) pagination over OFFSET, because OFFSET gets slower the deeper you page.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `// GET /orders?limit=20&cursor=1043
@Get()
findAll(@Query() q: ListOrdersDto) {
  const limit = Math.min(q.limit ?? 20, 100);
  return this.ordersService.list({ afterId: q.cursor, limit });
}

// SQL behind it: uses the primary key index, no deep OFFSET scan
// SELECT * FROM orders WHERE id > :cursor ORDER BY id LIMIT :limit`,
      },
      { type: "h2", text: "5. Cache hot reads" },
      {
        type: "p",
        text: "Many endpoints return data that changes rarely: product catalogues, settings, public profiles. Caching them in Redis takes load off the database. Use @nestjs/cache-manager with a Redis store so every instance shares the same cache, set a sensible TTL, and invalidate the key when the underlying data changes.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `@Injectable()
export class ProductsService {
  constructor(@Inject(CACHE_MANAGER) private cache: Cache, private repo: ProductsRepository) {}

  async findOne(id: string) {
    const key = \`product:\${id}\`;
    const cached = await this.cache.get(key);
    if (cached) return cached;

    const product = await this.repo.findById(id);
    await this.cache.set(key, product, 60_000); // 60s TTL
    return product;
  }
}`,
      },
      { type: "h2", text: "6. Rate limit and protect the edges" },
      {
        type: "p",
        text: "Rate limiting protects you from abusive clients and runaway scripts. @nestjs/throttler adds it in a few lines; back it with Redis storage when you run multiple instances so limits are shared. Add helmet for security headers and configure CORS to allow only your own front-end origins.",
      },
      {
        type: "code",
        lang: "typescript",
        code: `@Module({
  imports: [ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }])],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}`,
      },
      { type: "h2", text: "7. Move slow work to background jobs" },
      {
        type: "p",
        text: "Sending emails, generating PDFs and calling slow third-party APIs should not block an HTTP request. Push them to a queue (BullMQ via @nestjs/bullmq is a common choice) and return immediately. Workers can then be scaled separately from the API.",
      },
      { type: "h2", text: "8. Add health checks and structured logs" },
      {
        type: "p",
        text: "Load balancers and orchestrators need a health endpoint to know when to route traffic to an instance. @nestjs/terminus provides checks for the database, Redis and memory. Log in JSON with a request ID on every line so you can trace one request across services.",
      },
      { type: "h2", text: "Checklist" },
      {
        type: "ul",
        items: [
          "Feature modules with clear exports",
          "DTO validation with a global ValidationPipe (whitelist on)",
          "Stateless instances: shared sessions, files and cache",
          "Capped, cursor-based pagination on list endpoints",
          "Redis cache for hot reads, with invalidation",
          "Rate limiting, helmet and strict CORS",
          "Queues for slow or retryable work",
          "Health checks and structured, request-scoped logs",
        ],
      },
      {
        type: "p",
        text: "None of these are exotic. Applied from the start, they are the difference between an API that needs a rewrite at its first traffic spike and one you can scale by adding instances.",
      },
    ],
  },
  {
    slug: "laravel-performance-optimization",
    title: "Laravel Performance Optimization: Database Queries",
    description:
      "Speed up Laravel by fixing the database layer: N+1 queries, eager loading, selecting fewer columns, chunking, withCount, indexes and caching.",
    excerpt:
      "Discover advanced techniques to optimize Laravel application performance through efficient database query optimization.",
    date: "2025-09-28",
    readTime: "6 min read",
    tags: ["Laravel", "PHP", "Database", "Performance"],
    content: [
      {
        type: "p",
        text: "In most slow Laravel applications, PHP is not the bottleneck: the database is. Eloquent makes queries easy to write, which also makes inefficient queries easy to write. These are the fixes that give the biggest wins.",
      },
      { type: "h2", text: "1. Find the queries first" },
      {
        type: "p",
        text: "Measure before optimising. Laravel Debugbar or Telescope show every query a page runs, with timings. In production, log slow queries with a listener:",
      },
      {
        type: "code",
        lang: "php",
        code: `// AppServiceProvider::boot()
DB::listen(function ($query) {
    if ($query->time > 200) { // milliseconds
        Log::warning('Slow query', ['sql' => $query->sql, 'time' => $query->time]);
    }
});`,
      },
      { type: "h2", text: "2. Kill N+1 queries with eager loading" },
      {
        type: "p",
        text: "The classic problem: load 50 posts, then touch $post->author in a loop, and Laravel runs 1 + 50 queries. Eager load the relation with with() and it becomes 2 queries, whatever the number of posts.",
      },
      {
        type: "code",
        lang: "php",
        code: `// Bad: 1 query for posts + 1 per post for the author
$posts = Post::latest()->take(50)->get();
foreach ($posts as $post) {
    echo $post->author->name;
}

// Good: 2 queries in total
$posts = Post::with('author')->latest()->take(50)->get();`,
      },
      {
        type: "p",
        text: "Stop N+1 from coming back: make lazy loading throw an exception outside production.",
      },
      {
        type: "code",
        lang: "php",
        code: `// AppServiceProvider::boot()
Model::preventLazyLoading(! app()->isProduction());`,
      },
      { type: "h2", text: "3. Select only the columns you need" },
      {
        type: "p",
        text: "SELECT * pulls large text and JSON columns you never display. Select what the page uses, including the foreign keys that relations need.",
      },
      {
        type: "code",
        lang: "php",
        code: `$posts = Post::select('id', 'title', 'slug', 'author_id', 'published_at')
    ->with('author:id,name')
    ->latest('published_at')
    ->paginate(20);`,
      },
      { type: "h2", text: "4. Count and check existence in SQL" },
      {
        type: "p",
        text: "Loading a relation just to count it wastes memory. Let the database do the work with withCount(), and use exists() instead of count() > 0.",
      },
      {
        type: "code",
        lang: "php",
        code: `// Adds a comments_count attribute using a subquery
$posts = Post::withCount('comments')->get();

// Stops at the first match instead of counting every row
if (Order::where('user_id', $id)->exists()) { /* ... */ }`,
      },
      { type: "h2", text: "5. Process big tables in chunks" },
      {
        type: "p",
        text: "Calling ->get() on 500,000 rows loads all of them into memory. Use chunkById() or lazyById() to process records in batches. They page by primary key, so they stay fast and safe even if rows are updated during the loop.",
      },
      {
        type: "code",
        lang: "php",
        code: `User::where('active', true)->chunkById(1000, function ($users) {
    foreach ($users as $user) {
        // ...
    }
});

// Bulk updates: one query instead of one per row
User::where('last_login_at', '<', now()->subYear())->update(['active' => false]);`,
      },
      { type: "h2", text: "6. Index the columns you filter and sort by" },
      {
        type: "p",
        text: "Eloquent cannot fix a missing index. Any column used in WHERE, JOIN or ORDER BY on a large table is a candidate. Add indexes in migrations, and use a composite index when you filter on several columns together.",
      },
      {
        type: "code",
        lang: "php",
        code: `Schema::table('orders', function (Blueprint $table) {
    // Supports: WHERE user_id = ? AND status = ? ORDER BY created_at
    $table->index(['user_id', 'status', 'created_at']);
});`,
      },
      { type: "h2", text: "7. Cache expensive results" },
      {
        type: "p",
        text: "For data that is expensive to compute and changes rarely, cache the result with Cache::remember() and clear the key when the data changes (for example in a model observer).",
      },
      {
        type: "code",
        lang: "php",
        code: `$stats = Cache::remember('dashboard:stats', now()->addMinutes(10), function () {
    return [
        'orders' => Order::count(),
        'revenue' => Order::where('status', 'paid')->sum('total'),
    ];
});`,
      },
      { type: "h2", text: "Quick wins checklist" },
      {
        type: "ul",
        items: [
          "Measure with Debugbar, Telescope or a slow-query listener",
          "Eager load relations with with(); enable preventLazyLoading in development",
          "Select only needed columns",
          "Use withCount() and exists() instead of loading data",
          "chunkById() or lazyById() for large datasets; bulk update() for mass changes",
          "Composite indexes that match your WHERE and ORDER BY",
          "Cache::remember() for expensive, rarely changing results",
          "In production: php artisan config:cache, route:cache and view:cache",
        ],
      },
    ],
  },
  {
    slug: "mysql-indexing-strategies",
    title: "MySQL Indexing Strategies for Better Performance",
    description:
      "How MySQL indexes work and how to design them: B-trees, composite column order, covering indexes, EXPLAIN, common mistakes and unused indexes.",
    excerpt:
      "Master MySQL indexing strategies to dramatically improve your database performance and query execution time.",
    date: "2025-09-25",
    readTime: "10 min read",
    tags: ["MySQL", "Database", "Performance", "Indexing"],
    content: [
      {
        type: "p",
        text: "A missing index can turn a 2 ms query into a 2 second one, and the wrong index can be almost as bad. This guide explains how InnoDB indexes work and how to design them for the queries you actually run.",
      },
      { type: "h2", text: "How InnoDB indexes work" },
      {
        type: "p",
        text: "InnoDB stores indexes as B+trees: sorted structures that let MySQL jump to a value, or a range of values, without scanning the whole table. The table itself is the clustered index, ordered by primary key. Every secondary index stores the indexed columns plus the primary key, which MySQL uses to look up the full row.",
      },
      {
        type: "p",
        text: "Two consequences follow. Keep primary keys small (an INT or BIGINT auto-increment is ideal), because they are copied into every secondary index. And a query that needs columns not in the index pays for an extra lookup per row.",
      },
      { type: "h2", text: "Read the plan with EXPLAIN" },
      {
        type: "p",
        text: "Always check how MySQL runs a query before and after adding an index. In the output, look at type (ALL means a full table scan), key (the index chosen) and rows (the estimated rows examined). EXPLAIN ANALYZE in MySQL 8.0.18+ runs the query and shows actual timings.",
      },
      {
        type: "code",
        lang: "sql",
        code: `EXPLAIN SELECT id, total
FROM orders
WHERE customer_id = 42 AND status = 'paid'
ORDER BY created_at DESC
LIMIT 20;`,
      },
      { type: "h2", text: "Composite indexes: column order matters" },
      {
        type: "p",
        text: "A composite index on (a, b, c) is sorted by a, then b, then c. MySQL can use it for conditions on a, on a and b, or on a, b and c: the leftmost prefix. It cannot use it efficiently for a condition on b alone.",
      },
      {
        type: "p",
        text: "A reliable rule for ordering columns: equality conditions first, then the range or sort column last. Once MySQL hits a range condition, the columns after it in the index cannot be used for further filtering.",
      },
      {
        type: "code",
        lang: "sql",
        code: `-- Query: WHERE customer_id = ? AND status = ? ORDER BY created_at DESC
-- Equality columns first, sort column last:
CREATE INDEX idx_orders_customer_status_created
  ON orders (customer_id, status, created_at);

-- This index also serves: WHERE customer_id = ?
-- It does NOT help:       WHERE status = ?   (not a leftmost prefix)`,
      },
      { type: "h2", text: "Covering indexes" },
      {
        type: "p",
        text: "If an index contains every column a query needs, MySQL answers from the index alone and never touches the table rows. EXPLAIN shows this as \"Using index\" in the Extra column. Because the primary key is already in every secondary index, adding total below makes the earlier query fully covered.",
      },
      {
        type: "code",
        lang: "sql",
        code: `CREATE INDEX idx_orders_cover
  ON orders (customer_id, status, created_at, total);
-- SELECT id, total ... is now answered from the index alone`,
      },
      { type: "h2", text: "Mistakes that silently disable an index" },
      {
        type: "ul",
        items: [
          "Wrapping the column in a function: WHERE YEAR(created_at) = 2025 cannot use an index on created_at. Write a range instead: created_at >= '2025-01-01' AND created_at < '2026-01-01'.",
          "Leading wildcards: LIKE '%phone' cannot use a B-tree index. LIKE 'phone%' can. For real text search use a FULLTEXT index.",
          "Type mismatches: comparing a VARCHAR column to a number (WHERE phone = 98765) forces a conversion on every row.",
          "OR across different columns often falls back to a scan. A UNION of two indexed queries can be faster.",
          "Low-selectivity columns on their own: an index on a boolean or status column rarely helps by itself, but works well as part of a composite index.",
        ],
      },
      { type: "h2", text: "Do not over-index" },
      {
        type: "p",
        text: "Every index speeds up some reads and slows down every INSERT, UPDATE and DELETE, because each one must be maintained. It also uses memory in the buffer pool. Review indexes periodically: MySQL's sys schema lists indexes that have not been used since the server started.",
      },
      {
        type: "code",
        lang: "sql",
        code: `SELECT * FROM sys.schema_unused_indexes;
SELECT * FROM sys.schema_redundant_indexes;

-- MySQL 8: test removing an index safely before dropping it
ALTER TABLE orders ALTER INDEX idx_old_status INVISIBLE;
-- if nothing slows down:
DROP INDEX idx_old_status ON orders;`,
      },
      { type: "h2", text: "A simple workflow" },
      {
        type: "ul",
        items: [
          "Enable the slow query log and find the queries that cost the most in total",
          "Run EXPLAIN on each one",
          "Design one composite index per query pattern: equality columns, then range or sort",
          "Make it covering if the query is very hot",
          "Re-run EXPLAIN and measure",
          "Periodically remove unused and redundant indexes",
        ],
      },
      {
        type: "p",
        text: "Indexing is not about adding indexes everywhere; it is about matching indexes to real query patterns. Start from the slow query log, and let EXPLAIN tell you whether each change actually helped.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
