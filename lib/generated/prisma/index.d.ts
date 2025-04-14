
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Discourse
 * 
 */
export type Discourse = $Result.DefaultSelection<Prisma.$DiscoursePayload>
/**
 * Model Reply
 * 
 */
export type Reply = $Result.DefaultSelection<Prisma.$ReplyPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model DiscourseTag
 * 
 */
export type DiscourseTag = $Result.DefaultSelection<Prisma.$DiscourseTagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discourse`: Exposes CRUD operations for the **Discourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discourses
    * const discourses = await prisma.discourse.findMany()
    * ```
    */
  get discourse(): Prisma.DiscourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reply`: Exposes CRUD operations for the **Reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Replies
    * const replies = await prisma.reply.findMany()
    * ```
    */
  get reply(): Prisma.ReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discourseTag`: Exposes CRUD operations for the **DiscourseTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscourseTags
    * const discourseTags = await prisma.discourseTag.findMany()
    * ```
    */
  get discourseTag(): Prisma.DiscourseTagDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Discourse: 'Discourse',
    Reply: 'Reply',
    Tag: 'Tag',
    DiscourseTag: 'DiscourseTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "discourse" | "reply" | "tag" | "discourseTag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Discourse: {
        payload: Prisma.$DiscoursePayload<ExtArgs>
        fields: Prisma.DiscourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          findFirst: {
            args: Prisma.DiscourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          findMany: {
            args: Prisma.DiscourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>[]
          }
          create: {
            args: Prisma.DiscourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          createMany: {
            args: Prisma.DiscourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>[]
          }
          delete: {
            args: Prisma.DiscourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          update: {
            args: Prisma.DiscourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          deleteMany: {
            args: Prisma.DiscourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>[]
          }
          upsert: {
            args: Prisma.DiscourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoursePayload>
          }
          aggregate: {
            args: Prisma.DiscourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscourse>
          }
          groupBy: {
            args: Prisma.DiscourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscourseCountArgs<ExtArgs>
            result: $Utils.Optional<DiscourseCountAggregateOutputType> | number
          }
        }
      }
      Reply: {
        payload: Prisma.$ReplyPayload<ExtArgs>
        fields: Prisma.ReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findFirst: {
            args: Prisma.ReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          findMany: {
            args: Prisma.ReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          create: {
            args: Prisma.ReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          createMany: {
            args: Prisma.ReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          delete: {
            args: Prisma.ReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          update: {
            args: Prisma.ReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          deleteMany: {
            args: Prisma.ReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>[]
          }
          upsert: {
            args: Prisma.ReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReplyPayload>
          }
          aggregate: {
            args: Prisma.ReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReply>
          }
          groupBy: {
            args: Prisma.ReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReplyCountArgs<ExtArgs>
            result: $Utils.Optional<ReplyCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      DiscourseTag: {
        payload: Prisma.$DiscourseTagPayload<ExtArgs>
        fields: Prisma.DiscourseTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscourseTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscourseTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          findFirst: {
            args: Prisma.DiscourseTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscourseTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          findMany: {
            args: Prisma.DiscourseTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>[]
          }
          create: {
            args: Prisma.DiscourseTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          createMany: {
            args: Prisma.DiscourseTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscourseTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>[]
          }
          delete: {
            args: Prisma.DiscourseTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          update: {
            args: Prisma.DiscourseTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          deleteMany: {
            args: Prisma.DiscourseTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscourseTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscourseTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>[]
          }
          upsert: {
            args: Prisma.DiscourseTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscourseTagPayload>
          }
          aggregate: {
            args: Prisma.DiscourseTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscourseTag>
          }
          groupBy: {
            args: Prisma.DiscourseTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscourseTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscourseTagCountArgs<ExtArgs>
            result: $Utils.Optional<DiscourseTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    discourse?: DiscourseOmit
    reply?: ReplyOmit
    tag?: TagOmit
    discourseTag?: DiscourseTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    discourses: number
    replies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourses?: boolean | UserCountOutputTypeCountDiscoursesArgs
    replies?: boolean | UserCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Count Type DiscourseCountOutputType
   */

  export type DiscourseCountOutputType = {
    replies: number
    tags: number
  }

  export type DiscourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | DiscourseCountOutputTypeCountRepliesArgs
    tags?: boolean | DiscourseCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * DiscourseCountOutputType without action
   */
  export type DiscourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseCountOutputType
     */
    select?: DiscourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscourseCountOutputType without action
   */
  export type DiscourseCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }

  /**
   * DiscourseCountOutputType without action
   */
  export type DiscourseCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscourseTagWhereInput
  }


  /**
   * Count Type ReplyCountOutputType
   */

  export type ReplyCountOutputType = {
    replies: number
  }

  export type ReplyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ReplyCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReplyCountOutputType
     */
    select?: ReplyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReplyCountOutputType without action
   */
  export type ReplyCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    discourses: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourses?: boolean | TagCountOutputTypeCountDiscoursesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountDiscoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscourseTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullName: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    fullName: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    fullName: number
    avatarUrl: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    fullName?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    fullName: string
    avatarUrl: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discourses?: boolean | User$discoursesArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    fullName?: boolean
    avatarUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "fullName" | "avatarUrl" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourses?: boolean | User$discoursesArgs<ExtArgs>
    replies?: boolean | User$repliesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      discourses: Prisma.$DiscoursePayload<ExtArgs>[]
      replies: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      fullName: string
      avatarUrl: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discourses<T extends User$discoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$discoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replies<T extends User$repliesArgs<ExtArgs> = {}>(args?: Subset<T, User$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.discourses
   */
  export type User$discoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    where?: DiscourseWhereInput
    orderBy?: DiscourseOrderByWithRelationInput | DiscourseOrderByWithRelationInput[]
    cursor?: DiscourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscourseScalarFieldEnum | DiscourseScalarFieldEnum[]
  }

  /**
   * User.replies
   */
  export type User$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Discourse
   */

  export type AggregateDiscourse = {
    _count: DiscourseCountAggregateOutputType | null
    _avg: DiscourseAvgAggregateOutputType | null
    _sum: DiscourseSumAggregateOutputType | null
    _min: DiscourseMinAggregateOutputType | null
    _max: DiscourseMaxAggregateOutputType | null
  }

  export type DiscourseAvgAggregateOutputType = {
    replyCount: number | null
  }

  export type DiscourseSumAggregateOutputType = {
    replyCount: number | null
  }

  export type DiscourseMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    url: string | null
    domain: string | null
    imageUrl: string | null
    description: string | null
    note: string | null
    type: string | null
    replyCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type DiscourseMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    url: string | null
    domain: string | null
    imageUrl: string | null
    description: string | null
    note: string | null
    type: string | null
    replyCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: string | null
  }

  export type DiscourseCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    url: number
    domain: number
    imageUrl: number
    description: number
    note: number
    type: number
    replyCount: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type DiscourseAvgAggregateInputType = {
    replyCount?: true
  }

  export type DiscourseSumAggregateInputType = {
    replyCount?: true
  }

  export type DiscourseMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    url?: true
    domain?: true
    imageUrl?: true
    description?: true
    note?: true
    type?: true
    replyCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type DiscourseMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    url?: true
    domain?: true
    imageUrl?: true
    description?: true
    note?: true
    type?: true
    replyCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type DiscourseCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    url?: true
    domain?: true
    imageUrl?: true
    description?: true
    note?: true
    type?: true
    replyCount?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type DiscourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discourse to aggregate.
     */
    where?: DiscourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discourses to fetch.
     */
    orderBy?: DiscourseOrderByWithRelationInput | DiscourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discourses
    **/
    _count?: true | DiscourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscourseMaxAggregateInputType
  }

  export type GetDiscourseAggregateType<T extends DiscourseAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscourse[P]>
      : GetScalarType<T[P], AggregateDiscourse[P]>
  }




  export type DiscourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscourseWhereInput
    orderBy?: DiscourseOrderByWithAggregationInput | DiscourseOrderByWithAggregationInput[]
    by: DiscourseScalarFieldEnum[] | DiscourseScalarFieldEnum
    having?: DiscourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscourseCountAggregateInputType | true
    _avg?: DiscourseAvgAggregateInputType
    _sum?: DiscourseSumAggregateInputType
    _min?: DiscourseMinAggregateInputType
    _max?: DiscourseMaxAggregateInputType
  }

  export type DiscourseGroupByOutputType = {
    id: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl: string | null
    description: string | null
    note: string | null
    type: string
    replyCount: number
    createdAt: Date
    updatedAt: Date
    authorId: string
    _count: DiscourseCountAggregateOutputType | null
    _avg: DiscourseAvgAggregateOutputType | null
    _sum: DiscourseSumAggregateOutputType | null
    _min: DiscourseMinAggregateOutputType | null
    _max: DiscourseMaxAggregateOutputType | null
  }

  type GetDiscourseGroupByPayload<T extends DiscourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscourseGroupByOutputType[P]>
            : GetScalarType<T[P], DiscourseGroupByOutputType[P]>
        }
      >
    >


  export type DiscourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    url?: boolean
    domain?: boolean
    imageUrl?: boolean
    description?: boolean
    note?: boolean
    type?: boolean
    replyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Discourse$repliesArgs<ExtArgs>
    tags?: boolean | Discourse$tagsArgs<ExtArgs>
    _count?: boolean | DiscourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourse"]>

  export type DiscourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    url?: boolean
    domain?: boolean
    imageUrl?: boolean
    description?: boolean
    note?: boolean
    type?: boolean
    replyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourse"]>

  export type DiscourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    url?: boolean
    domain?: boolean
    imageUrl?: boolean
    description?: boolean
    note?: boolean
    type?: boolean
    replyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourse"]>

  export type DiscourseSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    url?: boolean
    domain?: boolean
    imageUrl?: boolean
    description?: boolean
    note?: boolean
    type?: boolean
    replyCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type DiscourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "url" | "domain" | "imageUrl" | "description" | "note" | "type" | "replyCount" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["discourse"]>
  export type DiscourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    replies?: boolean | Discourse$repliesArgs<ExtArgs>
    tags?: boolean | Discourse$tagsArgs<ExtArgs>
    _count?: boolean | DiscourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DiscourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DiscoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discourse"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      replies: Prisma.$ReplyPayload<ExtArgs>[]
      tags: Prisma.$DiscourseTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      url: string
      domain: string
      imageUrl: string | null
      description: string | null
      note: string | null
      type: string
      replyCount: number
      createdAt: Date
      updatedAt: Date
      authorId: string
    }, ExtArgs["result"]["discourse"]>
    composites: {}
  }

  type DiscourseGetPayload<S extends boolean | null | undefined | DiscourseDefaultArgs> = $Result.GetResult<Prisma.$DiscoursePayload, S>

  type DiscourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscourseCountAggregateInputType | true
    }

  export interface DiscourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discourse'], meta: { name: 'Discourse' } }
    /**
     * Find zero or one Discourse that matches the filter.
     * @param {DiscourseFindUniqueArgs} args - Arguments to find a Discourse
     * @example
     * // Get one Discourse
     * const discourse = await prisma.discourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscourseFindUniqueArgs>(args: SelectSubset<T, DiscourseFindUniqueArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscourseFindUniqueOrThrowArgs} args - Arguments to find a Discourse
     * @example
     * // Get one Discourse
     * const discourse = await prisma.discourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscourseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseFindFirstArgs} args - Arguments to find a Discourse
     * @example
     * // Get one Discourse
     * const discourse = await prisma.discourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscourseFindFirstArgs>(args?: SelectSubset<T, DiscourseFindFirstArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseFindFirstOrThrowArgs} args - Arguments to find a Discourse
     * @example
     * // Get one Discourse
     * const discourse = await prisma.discourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscourseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discourses
     * const discourses = await prisma.discourse.findMany()
     * 
     * // Get first 10 Discourses
     * const discourses = await prisma.discourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discourseWithIdOnly = await prisma.discourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscourseFindManyArgs>(args?: SelectSubset<T, DiscourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discourse.
     * @param {DiscourseCreateArgs} args - Arguments to create a Discourse.
     * @example
     * // Create one Discourse
     * const Discourse = await prisma.discourse.create({
     *   data: {
     *     // ... data to create a Discourse
     *   }
     * })
     * 
     */
    create<T extends DiscourseCreateArgs>(args: SelectSubset<T, DiscourseCreateArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discourses.
     * @param {DiscourseCreateManyArgs} args - Arguments to create many Discourses.
     * @example
     * // Create many Discourses
     * const discourse = await prisma.discourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscourseCreateManyArgs>(args?: SelectSubset<T, DiscourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discourses and returns the data saved in the database.
     * @param {DiscourseCreateManyAndReturnArgs} args - Arguments to create many Discourses.
     * @example
     * // Create many Discourses
     * const discourse = await prisma.discourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discourses and only return the `id`
     * const discourseWithIdOnly = await prisma.discourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscourseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discourse.
     * @param {DiscourseDeleteArgs} args - Arguments to delete one Discourse.
     * @example
     * // Delete one Discourse
     * const Discourse = await prisma.discourse.delete({
     *   where: {
     *     // ... filter to delete one Discourse
     *   }
     * })
     * 
     */
    delete<T extends DiscourseDeleteArgs>(args: SelectSubset<T, DiscourseDeleteArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discourse.
     * @param {DiscourseUpdateArgs} args - Arguments to update one Discourse.
     * @example
     * // Update one Discourse
     * const discourse = await prisma.discourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscourseUpdateArgs>(args: SelectSubset<T, DiscourseUpdateArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discourses.
     * @param {DiscourseDeleteManyArgs} args - Arguments to filter Discourses to delete.
     * @example
     * // Delete a few Discourses
     * const { count } = await prisma.discourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscourseDeleteManyArgs>(args?: SelectSubset<T, DiscourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discourses
     * const discourse = await prisma.discourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscourseUpdateManyArgs>(args: SelectSubset<T, DiscourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discourses and returns the data updated in the database.
     * @param {DiscourseUpdateManyAndReturnArgs} args - Arguments to update many Discourses.
     * @example
     * // Update many Discourses
     * const discourse = await prisma.discourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discourses and only return the `id`
     * const discourseWithIdOnly = await prisma.discourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscourseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discourse.
     * @param {DiscourseUpsertArgs} args - Arguments to update or create a Discourse.
     * @example
     * // Update or create a Discourse
     * const discourse = await prisma.discourse.upsert({
     *   create: {
     *     // ... data to create a Discourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discourse we want to update
     *   }
     * })
     */
    upsert<T extends DiscourseUpsertArgs>(args: SelectSubset<T, DiscourseUpsertArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseCountArgs} args - Arguments to filter Discourses to count.
     * @example
     * // Count the number of Discourses
     * const count = await prisma.discourse.count({
     *   where: {
     *     // ... the filter for the Discourses we want to count
     *   }
     * })
    **/
    count<T extends DiscourseCountArgs>(
      args?: Subset<T, DiscourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscourseAggregateArgs>(args: Subset<T, DiscourseAggregateArgs>): Prisma.PrismaPromise<GetDiscourseAggregateType<T>>

    /**
     * Group by Discourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscourseGroupByArgs['orderBy'] }
        : { orderBy?: DiscourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discourse model
   */
  readonly fields: DiscourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    replies<T extends Discourse$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Discourse$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Discourse$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Discourse$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discourse model
   */
  interface DiscourseFieldRefs {
    readonly id: FieldRef<"Discourse", 'String'>
    readonly slug: FieldRef<"Discourse", 'String'>
    readonly title: FieldRef<"Discourse", 'String'>
    readonly url: FieldRef<"Discourse", 'String'>
    readonly domain: FieldRef<"Discourse", 'String'>
    readonly imageUrl: FieldRef<"Discourse", 'String'>
    readonly description: FieldRef<"Discourse", 'String'>
    readonly note: FieldRef<"Discourse", 'String'>
    readonly type: FieldRef<"Discourse", 'String'>
    readonly replyCount: FieldRef<"Discourse", 'Int'>
    readonly createdAt: FieldRef<"Discourse", 'DateTime'>
    readonly updatedAt: FieldRef<"Discourse", 'DateTime'>
    readonly authorId: FieldRef<"Discourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Discourse findUnique
   */
  export type DiscourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter, which Discourse to fetch.
     */
    where: DiscourseWhereUniqueInput
  }

  /**
   * Discourse findUniqueOrThrow
   */
  export type DiscourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter, which Discourse to fetch.
     */
    where: DiscourseWhereUniqueInput
  }

  /**
   * Discourse findFirst
   */
  export type DiscourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter, which Discourse to fetch.
     */
    where?: DiscourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discourses to fetch.
     */
    orderBy?: DiscourseOrderByWithRelationInput | DiscourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discourses.
     */
    cursor?: DiscourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discourses.
     */
    distinct?: DiscourseScalarFieldEnum | DiscourseScalarFieldEnum[]
  }

  /**
   * Discourse findFirstOrThrow
   */
  export type DiscourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter, which Discourse to fetch.
     */
    where?: DiscourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discourses to fetch.
     */
    orderBy?: DiscourseOrderByWithRelationInput | DiscourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discourses.
     */
    cursor?: DiscourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discourses.
     */
    distinct?: DiscourseScalarFieldEnum | DiscourseScalarFieldEnum[]
  }

  /**
   * Discourse findMany
   */
  export type DiscourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter, which Discourses to fetch.
     */
    where?: DiscourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discourses to fetch.
     */
    orderBy?: DiscourseOrderByWithRelationInput | DiscourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discourses.
     */
    cursor?: DiscourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discourses.
     */
    skip?: number
    distinct?: DiscourseScalarFieldEnum | DiscourseScalarFieldEnum[]
  }

  /**
   * Discourse create
   */
  export type DiscourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Discourse.
     */
    data: XOR<DiscourseCreateInput, DiscourseUncheckedCreateInput>
  }

  /**
   * Discourse createMany
   */
  export type DiscourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discourses.
     */
    data: DiscourseCreateManyInput | DiscourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discourse createManyAndReturn
   */
  export type DiscourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * The data used to create many Discourses.
     */
    data: DiscourseCreateManyInput | DiscourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discourse update
   */
  export type DiscourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Discourse.
     */
    data: XOR<DiscourseUpdateInput, DiscourseUncheckedUpdateInput>
    /**
     * Choose, which Discourse to update.
     */
    where: DiscourseWhereUniqueInput
  }

  /**
   * Discourse updateMany
   */
  export type DiscourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discourses.
     */
    data: XOR<DiscourseUpdateManyMutationInput, DiscourseUncheckedUpdateManyInput>
    /**
     * Filter which Discourses to update
     */
    where?: DiscourseWhereInput
    /**
     * Limit how many Discourses to update.
     */
    limit?: number
  }

  /**
   * Discourse updateManyAndReturn
   */
  export type DiscourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * The data used to update Discourses.
     */
    data: XOR<DiscourseUpdateManyMutationInput, DiscourseUncheckedUpdateManyInput>
    /**
     * Filter which Discourses to update
     */
    where?: DiscourseWhereInput
    /**
     * Limit how many Discourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discourse upsert
   */
  export type DiscourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Discourse to update in case it exists.
     */
    where: DiscourseWhereUniqueInput
    /**
     * In case the Discourse found by the `where` argument doesn't exist, create a new Discourse with this data.
     */
    create: XOR<DiscourseCreateInput, DiscourseUncheckedCreateInput>
    /**
     * In case the Discourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscourseUpdateInput, DiscourseUncheckedUpdateInput>
  }

  /**
   * Discourse delete
   */
  export type DiscourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
    /**
     * Filter which Discourse to delete.
     */
    where: DiscourseWhereUniqueInput
  }

  /**
   * Discourse deleteMany
   */
  export type DiscourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discourses to delete
     */
    where?: DiscourseWhereInput
    /**
     * Limit how many Discourses to delete.
     */
    limit?: number
  }

  /**
   * Discourse.replies
   */
  export type Discourse$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Discourse.tags
   */
  export type Discourse$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    where?: DiscourseTagWhereInput
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    cursor?: DiscourseTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscourseTagScalarFieldEnum | DiscourseTagScalarFieldEnum[]
  }

  /**
   * Discourse without action
   */
  export type DiscourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discourse
     */
    select?: DiscourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discourse
     */
    omit?: DiscourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseInclude<ExtArgs> | null
  }


  /**
   * Model Reply
   */

  export type AggregateReply = {
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  export type ReplyMinAggregateOutputType = {
    id: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discourseId: string | null
    userId: string | null
    parentId: string | null
  }

  export type ReplyMaxAggregateOutputType = {
    id: string | null
    content: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
    discourseId: string | null
    userId: string | null
    parentId: string | null
  }

  export type ReplyCountAggregateOutputType = {
    id: number
    content: number
    category: number
    createdAt: number
    updatedAt: number
    discourseId: number
    userId: number
    parentId: number
    _all: number
  }


  export type ReplyMinAggregateInputType = {
    id?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    discourseId?: true
    userId?: true
    parentId?: true
  }

  export type ReplyMaxAggregateInputType = {
    id?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    discourseId?: true
    userId?: true
    parentId?: true
  }

  export type ReplyCountAggregateInputType = {
    id?: true
    content?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    discourseId?: true
    userId?: true
    parentId?: true
    _all?: true
  }

  export type ReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reply to aggregate.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Replies
    **/
    _count?: true | ReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReplyMaxAggregateInputType
  }

  export type GetReplyAggregateType<T extends ReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply[P]>
      : GetScalarType<T[P], AggregateReply[P]>
  }




  export type ReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithAggregationInput | ReplyOrderByWithAggregationInput[]
    by: ReplyScalarFieldEnum[] | ReplyScalarFieldEnum
    having?: ReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReplyCountAggregateInputType | true
    _min?: ReplyMinAggregateInputType
    _max?: ReplyMaxAggregateInputType
  }

  export type ReplyGroupByOutputType = {
    id: string
    content: string
    category: string
    createdAt: Date
    updatedAt: Date
    discourseId: string
    userId: string
    parentId: string | null
    _count: ReplyCountAggregateOutputType | null
    _min: ReplyMinAggregateOutputType | null
    _max: ReplyMaxAggregateOutputType | null
  }

  type GetReplyGroupByPayload<T extends ReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReplyGroupByOutputType[P]>
            : GetScalarType<T[P], ReplyGroupByOutputType[P]>
        }
      >
    >


  export type ReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discourseId?: boolean
    userId?: boolean
    parentId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
    replies?: boolean | Reply$repliesArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discourseId?: boolean
    userId?: boolean
    parentId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discourseId?: boolean
    userId?: boolean
    parentId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }, ExtArgs["result"]["reply"]>

  export type ReplySelectScalar = {
    id?: boolean
    content?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    discourseId?: boolean
    userId?: boolean
    parentId?: boolean
  }

  export type ReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "category" | "createdAt" | "updatedAt" | "discourseId" | "userId" | "parentId", ExtArgs["result"]["reply"]>
  export type ReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
    replies?: boolean | Reply$repliesArgs<ExtArgs>
    _count?: boolean | ReplyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }
  export type ReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Reply$parentArgs<ExtArgs>
  }

  export type $ReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reply"
    objects: {
      discourse: Prisma.$DiscoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$ReplyPayload<ExtArgs> | null
      replies: Prisma.$ReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      category: string
      createdAt: Date
      updatedAt: Date
      discourseId: string
      userId: string
      parentId: string | null
    }, ExtArgs["result"]["reply"]>
    composites: {}
  }

  type ReplyGetPayload<S extends boolean | null | undefined | ReplyDefaultArgs> = $Result.GetResult<Prisma.$ReplyPayload, S>

  type ReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReplyCountAggregateInputType | true
    }

  export interface ReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reply'], meta: { name: 'Reply' } }
    /**
     * Find zero or one Reply that matches the filter.
     * @param {ReplyFindUniqueArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReplyFindUniqueArgs>(args: SelectSubset<T, ReplyFindUniqueArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReplyFindUniqueOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReplyFindFirstArgs>(args?: SelectSubset<T, ReplyFindFirstArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindFirstOrThrowArgs} args - Arguments to find a Reply
     * @example
     * // Get one Reply
     * const reply = await prisma.reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Replies
     * const replies = await prisma.reply.findMany()
     * 
     * // Get first 10 Replies
     * const replies = await prisma.reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const replyWithIdOnly = await prisma.reply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReplyFindManyArgs>(args?: SelectSubset<T, ReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reply.
     * @param {ReplyCreateArgs} args - Arguments to create a Reply.
     * @example
     * // Create one Reply
     * const Reply = await prisma.reply.create({
     *   data: {
     *     // ... data to create a Reply
     *   }
     * })
     * 
     */
    create<T extends ReplyCreateArgs>(args: SelectSubset<T, ReplyCreateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Replies.
     * @param {ReplyCreateManyArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReplyCreateManyArgs>(args?: SelectSubset<T, ReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Replies and returns the data saved in the database.
     * @param {ReplyCreateManyAndReturnArgs} args - Arguments to create many Replies.
     * @example
     * // Create many Replies
     * const reply = await prisma.reply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reply.
     * @param {ReplyDeleteArgs} args - Arguments to delete one Reply.
     * @example
     * // Delete one Reply
     * const Reply = await prisma.reply.delete({
     *   where: {
     *     // ... filter to delete one Reply
     *   }
     * })
     * 
     */
    delete<T extends ReplyDeleteArgs>(args: SelectSubset<T, ReplyDeleteArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reply.
     * @param {ReplyUpdateArgs} args - Arguments to update one Reply.
     * @example
     * // Update one Reply
     * const reply = await prisma.reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReplyUpdateArgs>(args: SelectSubset<T, ReplyUpdateArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Replies.
     * @param {ReplyDeleteManyArgs} args - Arguments to filter Replies to delete.
     * @example
     * // Delete a few Replies
     * const { count } = await prisma.reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReplyDeleteManyArgs>(args?: SelectSubset<T, ReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReplyUpdateManyArgs>(args: SelectSubset<T, ReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Replies and returns the data updated in the database.
     * @param {ReplyUpdateManyAndReturnArgs} args - Arguments to update many Replies.
     * @example
     * // Update many Replies
     * const reply = await prisma.reply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Replies and only return the `id`
     * const replyWithIdOnly = await prisma.reply.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, ReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reply.
     * @param {ReplyUpsertArgs} args - Arguments to update or create a Reply.
     * @example
     * // Update or create a Reply
     * const reply = await prisma.reply.upsert({
     *   create: {
     *     // ... data to create a Reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply we want to update
     *   }
     * })
     */
    upsert<T extends ReplyUpsertArgs>(args: SelectSubset<T, ReplyUpsertArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyCountArgs} args - Arguments to filter Replies to count.
     * @example
     * // Count the number of Replies
     * const count = await prisma.reply.count({
     *   where: {
     *     // ... the filter for the Replies we want to count
     *   }
     * })
    **/
    count<T extends ReplyCountArgs>(
      args?: Subset<T, ReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReplyAggregateArgs>(args: Subset<T, ReplyAggregateArgs>): Prisma.PrismaPromise<GetReplyAggregateType<T>>

    /**
     * Group by Reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReplyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReplyGroupByArgs['orderBy'] }
        : { orderBy?: ReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reply model
   */
  readonly fields: ReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discourse<T extends DiscourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscourseDefaultArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Reply$parentArgs<ExtArgs> = {}>(args?: Subset<T, Reply$parentArgs<ExtArgs>>): Prisma__ReplyClient<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Reply$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Reply$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reply model
   */
  interface ReplyFieldRefs {
    readonly id: FieldRef<"Reply", 'String'>
    readonly content: FieldRef<"Reply", 'String'>
    readonly category: FieldRef<"Reply", 'String'>
    readonly createdAt: FieldRef<"Reply", 'DateTime'>
    readonly updatedAt: FieldRef<"Reply", 'DateTime'>
    readonly discourseId: FieldRef<"Reply", 'String'>
    readonly userId: FieldRef<"Reply", 'String'>
    readonly parentId: FieldRef<"Reply", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reply findUnique
   */
  export type ReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findUniqueOrThrow
   */
  export type ReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply findFirst
   */
  export type ReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findFirstOrThrow
   */
  export type ReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Reply to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Replies.
     */
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply findMany
   */
  export type ReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter, which Replies to fetch.
     */
    where?: ReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Replies to fetch.
     */
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Replies.
     */
    cursor?: ReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Replies.
     */
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply create
   */
  export type ReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a Reply.
     */
    data: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
  }

  /**
   * Reply createMany
   */
  export type ReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reply createManyAndReturn
   */
  export type ReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to create many Replies.
     */
    data: ReplyCreateManyInput | ReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply update
   */
  export type ReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a Reply.
     */
    data: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
    /**
     * Choose, which Reply to update.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply updateMany
   */
  export type ReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
  }

  /**
   * Reply updateManyAndReturn
   */
  export type ReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * The data used to update Replies.
     */
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyInput>
    /**
     * Filter which Replies to update
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reply upsert
   */
  export type ReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the Reply to update in case it exists.
     */
    where: ReplyWhereUniqueInput
    /**
     * In case the Reply found by the `where` argument doesn't exist, create a new Reply with this data.
     */
    create: XOR<ReplyCreateInput, ReplyUncheckedCreateInput>
    /**
     * In case the Reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReplyUpdateInput, ReplyUncheckedUpdateInput>
  }

  /**
   * Reply delete
   */
  export type ReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    /**
     * Filter which Reply to delete.
     */
    where: ReplyWhereUniqueInput
  }

  /**
   * Reply deleteMany
   */
  export type ReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Replies to delete
     */
    where?: ReplyWhereInput
    /**
     * Limit how many Replies to delete.
     */
    limit?: number
  }

  /**
   * Reply.parent
   */
  export type Reply$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
  }

  /**
   * Reply.replies
   */
  export type Reply$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
    where?: ReplyWhereInput
    orderBy?: ReplyOrderByWithRelationInput | ReplyOrderByWithRelationInput[]
    cursor?: ReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReplyScalarFieldEnum | ReplyScalarFieldEnum[]
  }

  /**
   * Reply without action
   */
  export type ReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reply
     */
    select?: ReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reply
     */
    omit?: ReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReplyInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    discourses?: boolean | Tag$discoursesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourses?: boolean | Tag$discoursesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      discourses: Prisma.$DiscourseTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discourses<T extends Tag$discoursesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$discoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.discourses
   */
  export type Tag$discoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    where?: DiscourseTagWhereInput
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    cursor?: DiscourseTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscourseTagScalarFieldEnum | DiscourseTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model DiscourseTag
   */

  export type AggregateDiscourseTag = {
    _count: DiscourseTagCountAggregateOutputType | null
    _min: DiscourseTagMinAggregateOutputType | null
    _max: DiscourseTagMaxAggregateOutputType | null
  }

  export type DiscourseTagMinAggregateOutputType = {
    discourseId: string | null
    tagId: string | null
  }

  export type DiscourseTagMaxAggregateOutputType = {
    discourseId: string | null
    tagId: string | null
  }

  export type DiscourseTagCountAggregateOutputType = {
    discourseId: number
    tagId: number
    _all: number
  }


  export type DiscourseTagMinAggregateInputType = {
    discourseId?: true
    tagId?: true
  }

  export type DiscourseTagMaxAggregateInputType = {
    discourseId?: true
    tagId?: true
  }

  export type DiscourseTagCountAggregateInputType = {
    discourseId?: true
    tagId?: true
    _all?: true
  }

  export type DiscourseTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscourseTag to aggregate.
     */
    where?: DiscourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscourseTags to fetch.
     */
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscourseTags
    **/
    _count?: true | DiscourseTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscourseTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscourseTagMaxAggregateInputType
  }

  export type GetDiscourseTagAggregateType<T extends DiscourseTagAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscourseTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscourseTag[P]>
      : GetScalarType<T[P], AggregateDiscourseTag[P]>
  }




  export type DiscourseTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscourseTagWhereInput
    orderBy?: DiscourseTagOrderByWithAggregationInput | DiscourseTagOrderByWithAggregationInput[]
    by: DiscourseTagScalarFieldEnum[] | DiscourseTagScalarFieldEnum
    having?: DiscourseTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscourseTagCountAggregateInputType | true
    _min?: DiscourseTagMinAggregateInputType
    _max?: DiscourseTagMaxAggregateInputType
  }

  export type DiscourseTagGroupByOutputType = {
    discourseId: string
    tagId: string
    _count: DiscourseTagCountAggregateOutputType | null
    _min: DiscourseTagMinAggregateOutputType | null
    _max: DiscourseTagMaxAggregateOutputType | null
  }

  type GetDiscourseTagGroupByPayload<T extends DiscourseTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscourseTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscourseTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscourseTagGroupByOutputType[P]>
            : GetScalarType<T[P], DiscourseTagGroupByOutputType[P]>
        }
      >
    >


  export type DiscourseTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discourseId?: boolean
    tagId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourseTag"]>

  export type DiscourseTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discourseId?: boolean
    tagId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourseTag"]>

  export type DiscourseTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    discourseId?: boolean
    tagId?: boolean
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discourseTag"]>

  export type DiscourseTagSelectScalar = {
    discourseId?: boolean
    tagId?: boolean
  }

  export type DiscourseTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"discourseId" | "tagId", ExtArgs["result"]["discourseTag"]>
  export type DiscourseTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type DiscourseTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type DiscourseTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discourse?: boolean | DiscourseDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $DiscourseTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscourseTag"
    objects: {
      discourse: Prisma.$DiscoursePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      discourseId: string
      tagId: string
    }, ExtArgs["result"]["discourseTag"]>
    composites: {}
  }

  type DiscourseTagGetPayload<S extends boolean | null | undefined | DiscourseTagDefaultArgs> = $Result.GetResult<Prisma.$DiscourseTagPayload, S>

  type DiscourseTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscourseTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscourseTagCountAggregateInputType | true
    }

  export interface DiscourseTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscourseTag'], meta: { name: 'DiscourseTag' } }
    /**
     * Find zero or one DiscourseTag that matches the filter.
     * @param {DiscourseTagFindUniqueArgs} args - Arguments to find a DiscourseTag
     * @example
     * // Get one DiscourseTag
     * const discourseTag = await prisma.discourseTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscourseTagFindUniqueArgs>(args: SelectSubset<T, DiscourseTagFindUniqueArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscourseTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscourseTagFindUniqueOrThrowArgs} args - Arguments to find a DiscourseTag
     * @example
     * // Get one DiscourseTag
     * const discourseTag = await prisma.discourseTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscourseTagFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscourseTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscourseTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagFindFirstArgs} args - Arguments to find a DiscourseTag
     * @example
     * // Get one DiscourseTag
     * const discourseTag = await prisma.discourseTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscourseTagFindFirstArgs>(args?: SelectSubset<T, DiscourseTagFindFirstArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscourseTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagFindFirstOrThrowArgs} args - Arguments to find a DiscourseTag
     * @example
     * // Get one DiscourseTag
     * const discourseTag = await prisma.discourseTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscourseTagFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscourseTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscourseTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscourseTags
     * const discourseTags = await prisma.discourseTag.findMany()
     * 
     * // Get first 10 DiscourseTags
     * const discourseTags = await prisma.discourseTag.findMany({ take: 10 })
     * 
     * // Only select the `discourseId`
     * const discourseTagWithDiscourseIdOnly = await prisma.discourseTag.findMany({ select: { discourseId: true } })
     * 
     */
    findMany<T extends DiscourseTagFindManyArgs>(args?: SelectSubset<T, DiscourseTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscourseTag.
     * @param {DiscourseTagCreateArgs} args - Arguments to create a DiscourseTag.
     * @example
     * // Create one DiscourseTag
     * const DiscourseTag = await prisma.discourseTag.create({
     *   data: {
     *     // ... data to create a DiscourseTag
     *   }
     * })
     * 
     */
    create<T extends DiscourseTagCreateArgs>(args: SelectSubset<T, DiscourseTagCreateArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscourseTags.
     * @param {DiscourseTagCreateManyArgs} args - Arguments to create many DiscourseTags.
     * @example
     * // Create many DiscourseTags
     * const discourseTag = await prisma.discourseTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscourseTagCreateManyArgs>(args?: SelectSubset<T, DiscourseTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscourseTags and returns the data saved in the database.
     * @param {DiscourseTagCreateManyAndReturnArgs} args - Arguments to create many DiscourseTags.
     * @example
     * // Create many DiscourseTags
     * const discourseTag = await prisma.discourseTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscourseTags and only return the `discourseId`
     * const discourseTagWithDiscourseIdOnly = await prisma.discourseTag.createManyAndReturn({
     *   select: { discourseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscourseTagCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscourseTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscourseTag.
     * @param {DiscourseTagDeleteArgs} args - Arguments to delete one DiscourseTag.
     * @example
     * // Delete one DiscourseTag
     * const DiscourseTag = await prisma.discourseTag.delete({
     *   where: {
     *     // ... filter to delete one DiscourseTag
     *   }
     * })
     * 
     */
    delete<T extends DiscourseTagDeleteArgs>(args: SelectSubset<T, DiscourseTagDeleteArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscourseTag.
     * @param {DiscourseTagUpdateArgs} args - Arguments to update one DiscourseTag.
     * @example
     * // Update one DiscourseTag
     * const discourseTag = await prisma.discourseTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscourseTagUpdateArgs>(args: SelectSubset<T, DiscourseTagUpdateArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscourseTags.
     * @param {DiscourseTagDeleteManyArgs} args - Arguments to filter DiscourseTags to delete.
     * @example
     * // Delete a few DiscourseTags
     * const { count } = await prisma.discourseTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscourseTagDeleteManyArgs>(args?: SelectSubset<T, DiscourseTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscourseTags
     * const discourseTag = await prisma.discourseTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscourseTagUpdateManyArgs>(args: SelectSubset<T, DiscourseTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscourseTags and returns the data updated in the database.
     * @param {DiscourseTagUpdateManyAndReturnArgs} args - Arguments to update many DiscourseTags.
     * @example
     * // Update many DiscourseTags
     * const discourseTag = await prisma.discourseTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscourseTags and only return the `discourseId`
     * const discourseTagWithDiscourseIdOnly = await prisma.discourseTag.updateManyAndReturn({
     *   select: { discourseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscourseTagUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscourseTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscourseTag.
     * @param {DiscourseTagUpsertArgs} args - Arguments to update or create a DiscourseTag.
     * @example
     * // Update or create a DiscourseTag
     * const discourseTag = await prisma.discourseTag.upsert({
     *   create: {
     *     // ... data to create a DiscourseTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscourseTag we want to update
     *   }
     * })
     */
    upsert<T extends DiscourseTagUpsertArgs>(args: SelectSubset<T, DiscourseTagUpsertArgs<ExtArgs>>): Prisma__DiscourseTagClient<$Result.GetResult<Prisma.$DiscourseTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscourseTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagCountArgs} args - Arguments to filter DiscourseTags to count.
     * @example
     * // Count the number of DiscourseTags
     * const count = await prisma.discourseTag.count({
     *   where: {
     *     // ... the filter for the DiscourseTags we want to count
     *   }
     * })
    **/
    count<T extends DiscourseTagCountArgs>(
      args?: Subset<T, DiscourseTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscourseTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscourseTagAggregateArgs>(args: Subset<T, DiscourseTagAggregateArgs>): Prisma.PrismaPromise<GetDiscourseTagAggregateType<T>>

    /**
     * Group by DiscourseTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscourseTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscourseTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscourseTagGroupByArgs['orderBy'] }
        : { orderBy?: DiscourseTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscourseTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscourseTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscourseTag model
   */
  readonly fields: DiscourseTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscourseTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscourseTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discourse<T extends DiscourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiscourseDefaultArgs<ExtArgs>>): Prisma__DiscourseClient<$Result.GetResult<Prisma.$DiscoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DiscourseTag model
   */
  interface DiscourseTagFieldRefs {
    readonly discourseId: FieldRef<"DiscourseTag", 'String'>
    readonly tagId: FieldRef<"DiscourseTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscourseTag findUnique
   */
  export type DiscourseTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter, which DiscourseTag to fetch.
     */
    where: DiscourseTagWhereUniqueInput
  }

  /**
   * DiscourseTag findUniqueOrThrow
   */
  export type DiscourseTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter, which DiscourseTag to fetch.
     */
    where: DiscourseTagWhereUniqueInput
  }

  /**
   * DiscourseTag findFirst
   */
  export type DiscourseTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter, which DiscourseTag to fetch.
     */
    where?: DiscourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscourseTags to fetch.
     */
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscourseTags.
     */
    cursor?: DiscourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscourseTags.
     */
    distinct?: DiscourseTagScalarFieldEnum | DiscourseTagScalarFieldEnum[]
  }

  /**
   * DiscourseTag findFirstOrThrow
   */
  export type DiscourseTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter, which DiscourseTag to fetch.
     */
    where?: DiscourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscourseTags to fetch.
     */
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscourseTags.
     */
    cursor?: DiscourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscourseTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscourseTags.
     */
    distinct?: DiscourseTagScalarFieldEnum | DiscourseTagScalarFieldEnum[]
  }

  /**
   * DiscourseTag findMany
   */
  export type DiscourseTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter, which DiscourseTags to fetch.
     */
    where?: DiscourseTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscourseTags to fetch.
     */
    orderBy?: DiscourseTagOrderByWithRelationInput | DiscourseTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscourseTags.
     */
    cursor?: DiscourseTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscourseTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscourseTags.
     */
    skip?: number
    distinct?: DiscourseTagScalarFieldEnum | DiscourseTagScalarFieldEnum[]
  }

  /**
   * DiscourseTag create
   */
  export type DiscourseTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * The data needed to create a DiscourseTag.
     */
    data: XOR<DiscourseTagCreateInput, DiscourseTagUncheckedCreateInput>
  }

  /**
   * DiscourseTag createMany
   */
  export type DiscourseTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscourseTags.
     */
    data: DiscourseTagCreateManyInput | DiscourseTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscourseTag createManyAndReturn
   */
  export type DiscourseTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * The data used to create many DiscourseTags.
     */
    data: DiscourseTagCreateManyInput | DiscourseTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscourseTag update
   */
  export type DiscourseTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * The data needed to update a DiscourseTag.
     */
    data: XOR<DiscourseTagUpdateInput, DiscourseTagUncheckedUpdateInput>
    /**
     * Choose, which DiscourseTag to update.
     */
    where: DiscourseTagWhereUniqueInput
  }

  /**
   * DiscourseTag updateMany
   */
  export type DiscourseTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscourseTags.
     */
    data: XOR<DiscourseTagUpdateManyMutationInput, DiscourseTagUncheckedUpdateManyInput>
    /**
     * Filter which DiscourseTags to update
     */
    where?: DiscourseTagWhereInput
    /**
     * Limit how many DiscourseTags to update.
     */
    limit?: number
  }

  /**
   * DiscourseTag updateManyAndReturn
   */
  export type DiscourseTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * The data used to update DiscourseTags.
     */
    data: XOR<DiscourseTagUpdateManyMutationInput, DiscourseTagUncheckedUpdateManyInput>
    /**
     * Filter which DiscourseTags to update
     */
    where?: DiscourseTagWhereInput
    /**
     * Limit how many DiscourseTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DiscourseTag upsert
   */
  export type DiscourseTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * The filter to search for the DiscourseTag to update in case it exists.
     */
    where: DiscourseTagWhereUniqueInput
    /**
     * In case the DiscourseTag found by the `where` argument doesn't exist, create a new DiscourseTag with this data.
     */
    create: XOR<DiscourseTagCreateInput, DiscourseTagUncheckedCreateInput>
    /**
     * In case the DiscourseTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscourseTagUpdateInput, DiscourseTagUncheckedUpdateInput>
  }

  /**
   * DiscourseTag delete
   */
  export type DiscourseTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
    /**
     * Filter which DiscourseTag to delete.
     */
    where: DiscourseTagWhereUniqueInput
  }

  /**
   * DiscourseTag deleteMany
   */
  export type DiscourseTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscourseTags to delete
     */
    where?: DiscourseTagWhereInput
    /**
     * Limit how many DiscourseTags to delete.
     */
    limit?: number
  }

  /**
   * DiscourseTag without action
   */
  export type DiscourseTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscourseTag
     */
    select?: DiscourseTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscourseTag
     */
    omit?: DiscourseTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscourseTagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    fullName: 'fullName',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DiscourseScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    url: 'url',
    domain: 'domain',
    imageUrl: 'imageUrl',
    description: 'description',
    note: 'note',
    type: 'type',
    replyCount: 'replyCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type DiscourseScalarFieldEnum = (typeof DiscourseScalarFieldEnum)[keyof typeof DiscourseScalarFieldEnum]


  export const ReplyScalarFieldEnum: {
    id: 'id',
    content: 'content',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    discourseId: 'discourseId',
    userId: 'userId',
    parentId: 'parentId'
  };

  export type ReplyScalarFieldEnum = (typeof ReplyScalarFieldEnum)[keyof typeof ReplyScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const DiscourseTagScalarFieldEnum: {
    discourseId: 'discourseId',
    tagId: 'tagId'
  };

  export type DiscourseTagScalarFieldEnum = (typeof DiscourseTagScalarFieldEnum)[keyof typeof DiscourseTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    discourses?: DiscourseListRelationFilter
    replies?: ReplyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourses?: DiscourseOrderByRelationAggregateInput
    replies?: ReplyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    discourses?: DiscourseListRelationFilter
    replies?: ReplyListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DiscourseWhereInput = {
    AND?: DiscourseWhereInput | DiscourseWhereInput[]
    OR?: DiscourseWhereInput[]
    NOT?: DiscourseWhereInput | DiscourseWhereInput[]
    id?: StringFilter<"Discourse"> | string
    slug?: StringFilter<"Discourse"> | string
    title?: StringFilter<"Discourse"> | string
    url?: StringFilter<"Discourse"> | string
    domain?: StringFilter<"Discourse"> | string
    imageUrl?: StringNullableFilter<"Discourse"> | string | null
    description?: StringNullableFilter<"Discourse"> | string | null
    note?: StringNullableFilter<"Discourse"> | string | null
    type?: StringFilter<"Discourse"> | string
    replyCount?: IntFilter<"Discourse"> | number
    createdAt?: DateTimeFilter<"Discourse"> | Date | string
    updatedAt?: DateTimeFilter<"Discourse"> | Date | string
    authorId?: StringFilter<"Discourse"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
    tags?: DiscourseTagListRelationFilter
  }

  export type DiscourseOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    url?: SortOrder
    domain?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    type?: SortOrder
    replyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
    tags?: DiscourseTagOrderByRelationAggregateInput
  }

  export type DiscourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: DiscourseWhereInput | DiscourseWhereInput[]
    OR?: DiscourseWhereInput[]
    NOT?: DiscourseWhereInput | DiscourseWhereInput[]
    title?: StringFilter<"Discourse"> | string
    url?: StringFilter<"Discourse"> | string
    domain?: StringFilter<"Discourse"> | string
    imageUrl?: StringNullableFilter<"Discourse"> | string | null
    description?: StringNullableFilter<"Discourse"> | string | null
    note?: StringNullableFilter<"Discourse"> | string | null
    type?: StringFilter<"Discourse"> | string
    replyCount?: IntFilter<"Discourse"> | number
    createdAt?: DateTimeFilter<"Discourse"> | Date | string
    updatedAt?: DateTimeFilter<"Discourse"> | Date | string
    authorId?: StringFilter<"Discourse"> | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    replies?: ReplyListRelationFilter
    tags?: DiscourseTagListRelationFilter
  }, "id" | "slug">

  export type DiscourseOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    url?: SortOrder
    domain?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    type?: SortOrder
    replyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: DiscourseCountOrderByAggregateInput
    _avg?: DiscourseAvgOrderByAggregateInput
    _max?: DiscourseMaxOrderByAggregateInput
    _min?: DiscourseMinOrderByAggregateInput
    _sum?: DiscourseSumOrderByAggregateInput
  }

  export type DiscourseScalarWhereWithAggregatesInput = {
    AND?: DiscourseScalarWhereWithAggregatesInput | DiscourseScalarWhereWithAggregatesInput[]
    OR?: DiscourseScalarWhereWithAggregatesInput[]
    NOT?: DiscourseScalarWhereWithAggregatesInput | DiscourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discourse"> | string
    slug?: StringWithAggregatesFilter<"Discourse"> | string
    title?: StringWithAggregatesFilter<"Discourse"> | string
    url?: StringWithAggregatesFilter<"Discourse"> | string
    domain?: StringWithAggregatesFilter<"Discourse"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Discourse"> | string | null
    description?: StringNullableWithAggregatesFilter<"Discourse"> | string | null
    note?: StringNullableWithAggregatesFilter<"Discourse"> | string | null
    type?: StringWithAggregatesFilter<"Discourse"> | string
    replyCount?: IntWithAggregatesFilter<"Discourse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Discourse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Discourse"> | Date | string
    authorId?: StringWithAggregatesFilter<"Discourse"> | string
  }

  export type ReplyWhereInput = {
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    id?: StringFilter<"Reply"> | string
    content?: StringFilter<"Reply"> | string
    category?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    discourseId?: StringFilter<"Reply"> | string
    userId?: StringFilter<"Reply"> | string
    parentId?: StringNullableFilter<"Reply"> | string | null
    discourse?: XOR<DiscourseScalarRelationFilter, DiscourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
    replies?: ReplyListRelationFilter
  }

  export type ReplyOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourseId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    discourse?: DiscourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: ReplyOrderByWithRelationInput
    replies?: ReplyOrderByRelationAggregateInput
  }

  export type ReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReplyWhereInput | ReplyWhereInput[]
    OR?: ReplyWhereInput[]
    NOT?: ReplyWhereInput | ReplyWhereInput[]
    content?: StringFilter<"Reply"> | string
    category?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    discourseId?: StringFilter<"Reply"> | string
    userId?: StringFilter<"Reply"> | string
    parentId?: StringNullableFilter<"Reply"> | string | null
    discourse?: XOR<DiscourseScalarRelationFilter, DiscourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<ReplyNullableScalarRelationFilter, ReplyWhereInput> | null
    replies?: ReplyListRelationFilter
  }, "id">

  export type ReplyOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourseId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: ReplyCountOrderByAggregateInput
    _max?: ReplyMaxOrderByAggregateInput
    _min?: ReplyMinOrderByAggregateInput
  }

  export type ReplyScalarWhereWithAggregatesInput = {
    AND?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    OR?: ReplyScalarWhereWithAggregatesInput[]
    NOT?: ReplyScalarWhereWithAggregatesInput | ReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reply"> | string
    content?: StringWithAggregatesFilter<"Reply"> | string
    category?: StringWithAggregatesFilter<"Reply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reply"> | Date | string
    discourseId?: StringWithAggregatesFilter<"Reply"> | string
    userId?: StringWithAggregatesFilter<"Reply"> | string
    parentId?: StringNullableWithAggregatesFilter<"Reply"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    discourses?: DiscourseTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    discourses?: DiscourseTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    discourses?: DiscourseTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type DiscourseTagWhereInput = {
    AND?: DiscourseTagWhereInput | DiscourseTagWhereInput[]
    OR?: DiscourseTagWhereInput[]
    NOT?: DiscourseTagWhereInput | DiscourseTagWhereInput[]
    discourseId?: StringFilter<"DiscourseTag"> | string
    tagId?: StringFilter<"DiscourseTag"> | string
    discourse?: XOR<DiscourseScalarRelationFilter, DiscourseWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type DiscourseTagOrderByWithRelationInput = {
    discourseId?: SortOrder
    tagId?: SortOrder
    discourse?: DiscourseOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type DiscourseTagWhereUniqueInput = Prisma.AtLeast<{
    discourseId_tagId?: DiscourseTagDiscourseIdTagIdCompoundUniqueInput
    AND?: DiscourseTagWhereInput | DiscourseTagWhereInput[]
    OR?: DiscourseTagWhereInput[]
    NOT?: DiscourseTagWhereInput | DiscourseTagWhereInput[]
    discourseId?: StringFilter<"DiscourseTag"> | string
    tagId?: StringFilter<"DiscourseTag"> | string
    discourse?: XOR<DiscourseScalarRelationFilter, DiscourseWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "discourseId_tagId">

  export type DiscourseTagOrderByWithAggregationInput = {
    discourseId?: SortOrder
    tagId?: SortOrder
    _count?: DiscourseTagCountOrderByAggregateInput
    _max?: DiscourseTagMaxOrderByAggregateInput
    _min?: DiscourseTagMinOrderByAggregateInput
  }

  export type DiscourseTagScalarWhereWithAggregatesInput = {
    AND?: DiscourseTagScalarWhereWithAggregatesInput | DiscourseTagScalarWhereWithAggregatesInput[]
    OR?: DiscourseTagScalarWhereWithAggregatesInput[]
    NOT?: DiscourseTagScalarWhereWithAggregatesInput | DiscourseTagScalarWhereWithAggregatesInput[]
    discourseId?: StringWithAggregatesFilter<"DiscourseTag"> | string
    tagId?: StringWithAggregatesFilter<"DiscourseTag"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discourses?: DiscourseCreateNestedManyWithoutAuthorInput
    replies?: ReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discourses?: DiscourseUncheckedCreateNestedManyWithoutAuthorInput
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseUncheckedUpdateManyWithoutAuthorNestedInput
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscourseCreateInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutDiscoursesInput
    replies?: ReplyCreateNestedManyWithoutDiscourseInput
    tags?: DiscourseTagCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutDiscourseInput
    tags?: DiscourseTagUncheckedCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutDiscoursesNestedInput
    replies?: ReplyUpdateManyWithoutDiscourseNestedInput
    tags?: DiscourseTagUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutDiscourseNestedInput
    tags?: DiscourseTagUncheckedUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseCreateManyInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
  }

  export type DiscourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourse: DiscourseCreateNestedOneWithoutRepliesInput
    user: UserCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutRepliesInput
    replies?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    userId: string
    parentId?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourse?: DiscourseUpdateOneRequiredWithoutRepliesNestedInput
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutRepliesNestedInput
    replies?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyCreateManyInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    userId: string
    parentId?: string | null
  }

  export type ReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    discourses?: DiscourseTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    discourses?: DiscourseTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscourseTagCreateInput = {
    discourse: DiscourseCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutDiscoursesInput
  }

  export type DiscourseTagUncheckedCreateInput = {
    discourseId: string
    tagId: string
  }

  export type DiscourseTagUpdateInput = {
    discourse?: DiscourseUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutDiscoursesNestedInput
  }

  export type DiscourseTagUncheckedUpdateInput = {
    discourseId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscourseTagCreateManyInput = {
    discourseId: string
    tagId: string
  }

  export type DiscourseTagUpdateManyMutationInput = {

  }

  export type DiscourseTagUncheckedUpdateManyInput = {
    discourseId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DiscourseListRelationFilter = {
    every?: DiscourseWhereInput
    some?: DiscourseWhereInput
    none?: DiscourseWhereInput
  }

  export type ReplyListRelationFilter = {
    every?: ReplyWhereInput
    some?: ReplyWhereInput
    none?: ReplyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiscourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DiscourseTagListRelationFilter = {
    every?: DiscourseTagWhereInput
    some?: DiscourseTagWhereInput
    none?: DiscourseTagWhereInput
  }

  export type DiscourseTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscourseCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    url?: SortOrder
    domain?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    note?: SortOrder
    type?: SortOrder
    replyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscourseAvgOrderByAggregateInput = {
    replyCount?: SortOrder
  }

  export type DiscourseMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    url?: SortOrder
    domain?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    note?: SortOrder
    type?: SortOrder
    replyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscourseMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    url?: SortOrder
    domain?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    note?: SortOrder
    type?: SortOrder
    replyCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type DiscourseSumOrderByAggregateInput = {
    replyCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DiscourseScalarRelationFilter = {
    is?: DiscourseWhereInput
    isNot?: DiscourseWhereInput
  }

  export type ReplyNullableScalarRelationFilter = {
    is?: ReplyWhereInput | null
    isNot?: ReplyWhereInput | null
  }

  export type ReplyCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourseId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type ReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourseId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type ReplyMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    discourseId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type DiscourseTagDiscourseIdTagIdCompoundUniqueInput = {
    discourseId: string
    tagId: string
  }

  export type DiscourseTagCountOrderByAggregateInput = {
    discourseId?: SortOrder
    tagId?: SortOrder
  }

  export type DiscourseTagMaxOrderByAggregateInput = {
    discourseId?: SortOrder
    tagId?: SortOrder
  }

  export type DiscourseTagMinOrderByAggregateInput = {
    discourseId?: SortOrder
    tagId?: SortOrder
  }

  export type DiscourseCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput> | DiscourseCreateWithoutAuthorInput[] | DiscourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscourseCreateOrConnectWithoutAuthorInput | DiscourseCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscourseCreateManyAuthorInputEnvelope
    connect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
  }

  export type ReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type DiscourseUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput> | DiscourseCreateWithoutAuthorInput[] | DiscourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscourseCreateOrConnectWithoutAuthorInput | DiscourseCreateOrConnectWithoutAuthorInput[]
    createMany?: DiscourseCreateManyAuthorInputEnvelope
    connect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DiscourseUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput> | DiscourseCreateWithoutAuthorInput[] | DiscourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscourseCreateOrConnectWithoutAuthorInput | DiscourseCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscourseUpsertWithWhereUniqueWithoutAuthorInput | DiscourseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscourseCreateManyAuthorInputEnvelope
    set?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    disconnect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    delete?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    connect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    update?: DiscourseUpdateWithWhereUniqueWithoutAuthorInput | DiscourseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscourseUpdateManyWithWhereWithoutAuthorInput | DiscourseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscourseScalarWhereInput | DiscourseScalarWhereInput[]
  }

  export type ReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutUserInput | ReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutUserInput | ReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutUserInput | ReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type DiscourseUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput> | DiscourseCreateWithoutAuthorInput[] | DiscourseUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: DiscourseCreateOrConnectWithoutAuthorInput | DiscourseCreateOrConnectWithoutAuthorInput[]
    upsert?: DiscourseUpsertWithWhereUniqueWithoutAuthorInput | DiscourseUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: DiscourseCreateManyAuthorInputEnvelope
    set?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    disconnect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    delete?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    connect?: DiscourseWhereUniqueInput | DiscourseWhereUniqueInput[]
    update?: DiscourseUpdateWithWhereUniqueWithoutAuthorInput | DiscourseUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: DiscourseUpdateManyWithWhereWithoutAuthorInput | DiscourseUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: DiscourseScalarWhereInput | DiscourseScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput> | ReplyCreateWithoutUserInput[] | ReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutUserInput | ReplyCreateOrConnectWithoutUserInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutUserInput | ReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReplyCreateManyUserInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutUserInput | ReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutUserInput | ReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDiscoursesInput = {
    create?: XOR<UserCreateWithoutDiscoursesInput, UserUncheckedCreateWithoutDiscoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscoursesInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutDiscourseInput = {
    create?: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput> | ReplyCreateWithoutDiscourseInput[] | ReplyUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscourseInput | ReplyCreateOrConnectWithoutDiscourseInput[]
    createMany?: ReplyCreateManyDiscourseInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type DiscourseTagCreateNestedManyWithoutDiscourseInput = {
    create?: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput> | DiscourseTagCreateWithoutDiscourseInput[] | DiscourseTagUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutDiscourseInput | DiscourseTagCreateOrConnectWithoutDiscourseInput[]
    createMany?: DiscourseTagCreateManyDiscourseInputEnvelope
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutDiscourseInput = {
    create?: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput> | ReplyCreateWithoutDiscourseInput[] | ReplyUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscourseInput | ReplyCreateOrConnectWithoutDiscourseInput[]
    createMany?: ReplyCreateManyDiscourseInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type DiscourseTagUncheckedCreateNestedManyWithoutDiscourseInput = {
    create?: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput> | DiscourseTagCreateWithoutDiscourseInput[] | DiscourseTagUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutDiscourseInput | DiscourseTagCreateOrConnectWithoutDiscourseInput[]
    createMany?: DiscourseTagCreateManyDiscourseInputEnvelope
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDiscoursesNestedInput = {
    create?: XOR<UserCreateWithoutDiscoursesInput, UserUncheckedCreateWithoutDiscoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscoursesInput
    upsert?: UserUpsertWithoutDiscoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiscoursesInput, UserUpdateWithoutDiscoursesInput>, UserUncheckedUpdateWithoutDiscoursesInput>
  }

  export type ReplyUpdateManyWithoutDiscourseNestedInput = {
    create?: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput> | ReplyCreateWithoutDiscourseInput[] | ReplyUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscourseInput | ReplyCreateOrConnectWithoutDiscourseInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutDiscourseInput | ReplyUpsertWithWhereUniqueWithoutDiscourseInput[]
    createMany?: ReplyCreateManyDiscourseInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutDiscourseInput | ReplyUpdateWithWhereUniqueWithoutDiscourseInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutDiscourseInput | ReplyUpdateManyWithWhereWithoutDiscourseInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type DiscourseTagUpdateManyWithoutDiscourseNestedInput = {
    create?: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput> | DiscourseTagCreateWithoutDiscourseInput[] | DiscourseTagUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutDiscourseInput | DiscourseTagCreateOrConnectWithoutDiscourseInput[]
    upsert?: DiscourseTagUpsertWithWhereUniqueWithoutDiscourseInput | DiscourseTagUpsertWithWhereUniqueWithoutDiscourseInput[]
    createMany?: DiscourseTagCreateManyDiscourseInputEnvelope
    set?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    disconnect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    delete?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    update?: DiscourseTagUpdateWithWhereUniqueWithoutDiscourseInput | DiscourseTagUpdateWithWhereUniqueWithoutDiscourseInput[]
    updateMany?: DiscourseTagUpdateManyWithWhereWithoutDiscourseInput | DiscourseTagUpdateManyWithWhereWithoutDiscourseInput[]
    deleteMany?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutDiscourseNestedInput = {
    create?: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput> | ReplyCreateWithoutDiscourseInput[] | ReplyUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutDiscourseInput | ReplyCreateOrConnectWithoutDiscourseInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutDiscourseInput | ReplyUpsertWithWhereUniqueWithoutDiscourseInput[]
    createMany?: ReplyCreateManyDiscourseInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutDiscourseInput | ReplyUpdateWithWhereUniqueWithoutDiscourseInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutDiscourseInput | ReplyUpdateManyWithWhereWithoutDiscourseInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type DiscourseTagUncheckedUpdateManyWithoutDiscourseNestedInput = {
    create?: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput> | DiscourseTagCreateWithoutDiscourseInput[] | DiscourseTagUncheckedCreateWithoutDiscourseInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutDiscourseInput | DiscourseTagCreateOrConnectWithoutDiscourseInput[]
    upsert?: DiscourseTagUpsertWithWhereUniqueWithoutDiscourseInput | DiscourseTagUpsertWithWhereUniqueWithoutDiscourseInput[]
    createMany?: DiscourseTagCreateManyDiscourseInputEnvelope
    set?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    disconnect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    delete?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    update?: DiscourseTagUpdateWithWhereUniqueWithoutDiscourseInput | DiscourseTagUpdateWithWhereUniqueWithoutDiscourseInput[]
    updateMany?: DiscourseTagUpdateManyWithWhereWithoutDiscourseInput | DiscourseTagUpdateManyWithWhereWithoutDiscourseInput[]
    deleteMany?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
  }

  export type DiscourseCreateNestedOneWithoutRepliesInput = {
    create?: XOR<DiscourseCreateWithoutRepliesInput, DiscourseUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscourseCreateOrConnectWithoutRepliesInput
    connect?: DiscourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRepliesInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type ReplyCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ReplyCreateWithoutRepliesInput, ReplyUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutRepliesInput
    connect?: ReplyWhereUniqueInput
  }

  export type ReplyCreateNestedManyWithoutParentInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type ReplyUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
  }

  export type DiscourseUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<DiscourseCreateWithoutRepliesInput, DiscourseUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: DiscourseCreateOrConnectWithoutRepliesInput
    upsert?: DiscourseUpsertWithoutRepliesInput
    connect?: DiscourseWhereUniqueInput
    update?: XOR<XOR<DiscourseUpdateToOneWithWhereWithoutRepliesInput, DiscourseUpdateWithoutRepliesInput>, DiscourseUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRepliesInput
    upsert?: UserUpsertWithoutRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRepliesInput, UserUpdateWithoutRepliesInput>, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type ReplyUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ReplyCreateWithoutRepliesInput, ReplyUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ReplyCreateOrConnectWithoutRepliesInput
    upsert?: ReplyUpsertWithoutRepliesInput
    disconnect?: ReplyWhereInput | boolean
    delete?: ReplyWhereInput | boolean
    connect?: ReplyWhereUniqueInput
    update?: XOR<XOR<ReplyUpdateToOneWithWhereWithoutRepliesInput, ReplyUpdateWithoutRepliesInput>, ReplyUncheckedUpdateWithoutRepliesInput>
  }

  export type ReplyUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutParentInput | ReplyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutParentInput | ReplyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutParentInput | ReplyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type ReplyUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput> | ReplyCreateWithoutParentInput[] | ReplyUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ReplyCreateOrConnectWithoutParentInput | ReplyCreateOrConnectWithoutParentInput[]
    upsert?: ReplyUpsertWithWhereUniqueWithoutParentInput | ReplyUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ReplyCreateManyParentInputEnvelope
    set?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    disconnect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    delete?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    connect?: ReplyWhereUniqueInput | ReplyWhereUniqueInput[]
    update?: ReplyUpdateWithWhereUniqueWithoutParentInput | ReplyUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ReplyUpdateManyWithWhereWithoutParentInput | ReplyUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
  }

  export type DiscourseTagCreateNestedManyWithoutTagInput = {
    create?: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput> | DiscourseTagCreateWithoutTagInput[] | DiscourseTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutTagInput | DiscourseTagCreateOrConnectWithoutTagInput[]
    createMany?: DiscourseTagCreateManyTagInputEnvelope
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
  }

  export type DiscourseTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput> | DiscourseTagCreateWithoutTagInput[] | DiscourseTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutTagInput | DiscourseTagCreateOrConnectWithoutTagInput[]
    createMany?: DiscourseTagCreateManyTagInputEnvelope
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
  }

  export type DiscourseTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput> | DiscourseTagCreateWithoutTagInput[] | DiscourseTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutTagInput | DiscourseTagCreateOrConnectWithoutTagInput[]
    upsert?: DiscourseTagUpsertWithWhereUniqueWithoutTagInput | DiscourseTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: DiscourseTagCreateManyTagInputEnvelope
    set?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    disconnect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    delete?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    update?: DiscourseTagUpdateWithWhereUniqueWithoutTagInput | DiscourseTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: DiscourseTagUpdateManyWithWhereWithoutTagInput | DiscourseTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
  }

  export type DiscourseTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput> | DiscourseTagCreateWithoutTagInput[] | DiscourseTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: DiscourseTagCreateOrConnectWithoutTagInput | DiscourseTagCreateOrConnectWithoutTagInput[]
    upsert?: DiscourseTagUpsertWithWhereUniqueWithoutTagInput | DiscourseTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: DiscourseTagCreateManyTagInputEnvelope
    set?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    disconnect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    delete?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    connect?: DiscourseTagWhereUniqueInput | DiscourseTagWhereUniqueInput[]
    update?: DiscourseTagUpdateWithWhereUniqueWithoutTagInput | DiscourseTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: DiscourseTagUpdateManyWithWhereWithoutTagInput | DiscourseTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
  }

  export type DiscourseCreateNestedOneWithoutTagsInput = {
    create?: XOR<DiscourseCreateWithoutTagsInput, DiscourseUncheckedCreateWithoutTagsInput>
    connectOrCreate?: DiscourseCreateOrConnectWithoutTagsInput
    connect?: DiscourseWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutDiscoursesInput = {
    create?: XOR<TagCreateWithoutDiscoursesInput, TagUncheckedCreateWithoutDiscoursesInput>
    connectOrCreate?: TagCreateOrConnectWithoutDiscoursesInput
    connect?: TagWhereUniqueInput
  }

  export type DiscourseUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<DiscourseCreateWithoutTagsInput, DiscourseUncheckedCreateWithoutTagsInput>
    connectOrCreate?: DiscourseCreateOrConnectWithoutTagsInput
    upsert?: DiscourseUpsertWithoutTagsInput
    connect?: DiscourseWhereUniqueInput
    update?: XOR<XOR<DiscourseUpdateToOneWithWhereWithoutTagsInput, DiscourseUpdateWithoutTagsInput>, DiscourseUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutDiscoursesNestedInput = {
    create?: XOR<TagCreateWithoutDiscoursesInput, TagUncheckedCreateWithoutDiscoursesInput>
    connectOrCreate?: TagCreateOrConnectWithoutDiscoursesInput
    upsert?: TagUpsertWithoutDiscoursesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutDiscoursesInput, TagUpdateWithoutDiscoursesInput>, TagUncheckedUpdateWithoutDiscoursesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DiscourseCreateWithoutAuthorInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutDiscourseInput
    tags?: DiscourseTagCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseUncheckedCreateWithoutAuthorInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutDiscourseInput
    tags?: DiscourseTagUncheckedCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseCreateOrConnectWithoutAuthorInput = {
    where: DiscourseWhereUniqueInput
    create: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput>
  }

  export type DiscourseCreateManyAuthorInputEnvelope = {
    data: DiscourseCreateManyAuthorInput | DiscourseCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReplyCreateWithoutUserInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourse: DiscourseCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutRepliesInput
    replies?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    parentId?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutUserInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput>
  }

  export type ReplyCreateManyUserInputEnvelope = {
    data: ReplyCreateManyUserInput | ReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscourseUpsertWithWhereUniqueWithoutAuthorInput = {
    where: DiscourseWhereUniqueInput
    update: XOR<DiscourseUpdateWithoutAuthorInput, DiscourseUncheckedUpdateWithoutAuthorInput>
    create: XOR<DiscourseCreateWithoutAuthorInput, DiscourseUncheckedCreateWithoutAuthorInput>
  }

  export type DiscourseUpdateWithWhereUniqueWithoutAuthorInput = {
    where: DiscourseWhereUniqueInput
    data: XOR<DiscourseUpdateWithoutAuthorInput, DiscourseUncheckedUpdateWithoutAuthorInput>
  }

  export type DiscourseUpdateManyWithWhereWithoutAuthorInput = {
    where: DiscourseScalarWhereInput
    data: XOR<DiscourseUpdateManyMutationInput, DiscourseUncheckedUpdateManyWithoutAuthorInput>
  }

  export type DiscourseScalarWhereInput = {
    AND?: DiscourseScalarWhereInput | DiscourseScalarWhereInput[]
    OR?: DiscourseScalarWhereInput[]
    NOT?: DiscourseScalarWhereInput | DiscourseScalarWhereInput[]
    id?: StringFilter<"Discourse"> | string
    slug?: StringFilter<"Discourse"> | string
    title?: StringFilter<"Discourse"> | string
    url?: StringFilter<"Discourse"> | string
    domain?: StringFilter<"Discourse"> | string
    imageUrl?: StringNullableFilter<"Discourse"> | string | null
    description?: StringNullableFilter<"Discourse"> | string | null
    note?: StringNullableFilter<"Discourse"> | string | null
    type?: StringFilter<"Discourse"> | string
    replyCount?: IntFilter<"Discourse"> | number
    createdAt?: DateTimeFilter<"Discourse"> | Date | string
    updatedAt?: DateTimeFilter<"Discourse"> | Date | string
    authorId?: StringFilter<"Discourse"> | string
  }

  export type ReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutUserInput, ReplyUncheckedUpdateWithoutUserInput>
    create: XOR<ReplyCreateWithoutUserInput, ReplyUncheckedCreateWithoutUserInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutUserInput, ReplyUncheckedUpdateWithoutUserInput>
  }

  export type ReplyUpdateManyWithWhereWithoutUserInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type ReplyScalarWhereInput = {
    AND?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    OR?: ReplyScalarWhereInput[]
    NOT?: ReplyScalarWhereInput | ReplyScalarWhereInput[]
    id?: StringFilter<"Reply"> | string
    content?: StringFilter<"Reply"> | string
    category?: StringFilter<"Reply"> | string
    createdAt?: DateTimeFilter<"Reply"> | Date | string
    updatedAt?: DateTimeFilter<"Reply"> | Date | string
    discourseId?: StringFilter<"Reply"> | string
    userId?: StringFilter<"Reply"> | string
    parentId?: StringNullableFilter<"Reply"> | string | null
  }

  export type UserCreateWithoutDiscoursesInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiscoursesInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: ReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiscoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiscoursesInput, UserUncheckedCreateWithoutDiscoursesInput>
  }

  export type ReplyCreateWithoutDiscourseInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutRepliesInput
    replies?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutDiscourseInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
    replies?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutDiscourseInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput>
  }

  export type ReplyCreateManyDiscourseInputEnvelope = {
    data: ReplyCreateManyDiscourseInput | ReplyCreateManyDiscourseInput[]
    skipDuplicates?: boolean
  }

  export type DiscourseTagCreateWithoutDiscourseInput = {
    tag: TagCreateNestedOneWithoutDiscoursesInput
  }

  export type DiscourseTagUncheckedCreateWithoutDiscourseInput = {
    tagId: string
  }

  export type DiscourseTagCreateOrConnectWithoutDiscourseInput = {
    where: DiscourseTagWhereUniqueInput
    create: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput>
  }

  export type DiscourseTagCreateManyDiscourseInputEnvelope = {
    data: DiscourseTagCreateManyDiscourseInput | DiscourseTagCreateManyDiscourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDiscoursesInput = {
    update: XOR<UserUpdateWithoutDiscoursesInput, UserUncheckedUpdateWithoutDiscoursesInput>
    create: XOR<UserCreateWithoutDiscoursesInput, UserUncheckedCreateWithoutDiscoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiscoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiscoursesInput, UserUncheckedUpdateWithoutDiscoursesInput>
  }

  export type UserUpdateWithoutDiscoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiscoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReplyUpsertWithWhereUniqueWithoutDiscourseInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutDiscourseInput, ReplyUncheckedUpdateWithoutDiscourseInput>
    create: XOR<ReplyCreateWithoutDiscourseInput, ReplyUncheckedCreateWithoutDiscourseInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutDiscourseInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutDiscourseInput, ReplyUncheckedUpdateWithoutDiscourseInput>
  }

  export type ReplyUpdateManyWithWhereWithoutDiscourseInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutDiscourseInput>
  }

  export type DiscourseTagUpsertWithWhereUniqueWithoutDiscourseInput = {
    where: DiscourseTagWhereUniqueInput
    update: XOR<DiscourseTagUpdateWithoutDiscourseInput, DiscourseTagUncheckedUpdateWithoutDiscourseInput>
    create: XOR<DiscourseTagCreateWithoutDiscourseInput, DiscourseTagUncheckedCreateWithoutDiscourseInput>
  }

  export type DiscourseTagUpdateWithWhereUniqueWithoutDiscourseInput = {
    where: DiscourseTagWhereUniqueInput
    data: XOR<DiscourseTagUpdateWithoutDiscourseInput, DiscourseTagUncheckedUpdateWithoutDiscourseInput>
  }

  export type DiscourseTagUpdateManyWithWhereWithoutDiscourseInput = {
    where: DiscourseTagScalarWhereInput
    data: XOR<DiscourseTagUpdateManyMutationInput, DiscourseTagUncheckedUpdateManyWithoutDiscourseInput>
  }

  export type DiscourseTagScalarWhereInput = {
    AND?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
    OR?: DiscourseTagScalarWhereInput[]
    NOT?: DiscourseTagScalarWhereInput | DiscourseTagScalarWhereInput[]
    discourseId?: StringFilter<"DiscourseTag"> | string
    tagId?: StringFilter<"DiscourseTag"> | string
  }

  export type DiscourseCreateWithoutRepliesInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutDiscoursesInput
    tags?: DiscourseTagCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseUncheckedCreateWithoutRepliesInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    tags?: DiscourseTagUncheckedCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseCreateOrConnectWithoutRepliesInput = {
    where: DiscourseWhereUniqueInput
    create: XOR<DiscourseCreateWithoutRepliesInput, DiscourseUncheckedCreateWithoutRepliesInput>
  }

  export type UserCreateWithoutRepliesInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discourses?: DiscourseCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRepliesInput = {
    id?: string
    email: string
    username: string
    fullName: string
    avatarUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    discourses?: DiscourseUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
  }

  export type ReplyCreateWithoutRepliesInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourse: DiscourseCreateNestedOneWithoutRepliesInput
    user: UserCreateNestedOneWithoutRepliesInput
    parent?: ReplyCreateNestedOneWithoutRepliesInput
  }

  export type ReplyUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    userId: string
    parentId?: string | null
  }

  export type ReplyCreateOrConnectWithoutRepliesInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutRepliesInput, ReplyUncheckedCreateWithoutRepliesInput>
  }

  export type ReplyCreateWithoutParentInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourse: DiscourseCreateNestedOneWithoutRepliesInput
    user: UserCreateNestedOneWithoutRepliesInput
    replies?: ReplyCreateNestedManyWithoutParentInput
  }

  export type ReplyUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    userId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutParentInput
  }

  export type ReplyCreateOrConnectWithoutParentInput = {
    where: ReplyWhereUniqueInput
    create: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput>
  }

  export type ReplyCreateManyParentInputEnvelope = {
    data: ReplyCreateManyParentInput | ReplyCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type DiscourseUpsertWithoutRepliesInput = {
    update: XOR<DiscourseUpdateWithoutRepliesInput, DiscourseUncheckedUpdateWithoutRepliesInput>
    create: XOR<DiscourseCreateWithoutRepliesInput, DiscourseUncheckedCreateWithoutRepliesInput>
    where?: DiscourseWhereInput
  }

  export type DiscourseUpdateToOneWithWhereWithoutRepliesInput = {
    where?: DiscourseWhereInput
    data: XOR<DiscourseUpdateWithoutRepliesInput, DiscourseUncheckedUpdateWithoutRepliesInput>
  }

  export type DiscourseUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutDiscoursesNestedInput
    tags?: DiscourseTagUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    tags?: DiscourseTagUncheckedUpdateManyWithoutDiscourseNestedInput
  }

  export type UserUpsertWithoutRepliesInput = {
    update: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
    create: XOR<UserCreateWithoutRepliesInput, UserUncheckedCreateWithoutRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRepliesInput, UserUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourses?: DiscourseUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReplyUpsertWithoutRepliesInput = {
    update: XOR<ReplyUpdateWithoutRepliesInput, ReplyUncheckedUpdateWithoutRepliesInput>
    create: XOR<ReplyCreateWithoutRepliesInput, ReplyUncheckedCreateWithoutRepliesInput>
    where?: ReplyWhereInput
  }

  export type ReplyUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ReplyWhereInput
    data: XOR<ReplyUpdateWithoutRepliesInput, ReplyUncheckedUpdateWithoutRepliesInput>
  }

  export type ReplyUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourse?: DiscourseUpdateOneRequiredWithoutRepliesNestedInput
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutRepliesNestedInput
  }

  export type ReplyUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyUpsertWithWhereUniqueWithoutParentInput = {
    where: ReplyWhereUniqueInput
    update: XOR<ReplyUpdateWithoutParentInput, ReplyUncheckedUpdateWithoutParentInput>
    create: XOR<ReplyCreateWithoutParentInput, ReplyUncheckedCreateWithoutParentInput>
  }

  export type ReplyUpdateWithWhereUniqueWithoutParentInput = {
    where: ReplyWhereUniqueInput
    data: XOR<ReplyUpdateWithoutParentInput, ReplyUncheckedUpdateWithoutParentInput>
  }

  export type ReplyUpdateManyWithWhereWithoutParentInput = {
    where: ReplyScalarWhereInput
    data: XOR<ReplyUpdateManyMutationInput, ReplyUncheckedUpdateManyWithoutParentInput>
  }

  export type DiscourseTagCreateWithoutTagInput = {
    discourse: DiscourseCreateNestedOneWithoutTagsInput
  }

  export type DiscourseTagUncheckedCreateWithoutTagInput = {
    discourseId: string
  }

  export type DiscourseTagCreateOrConnectWithoutTagInput = {
    where: DiscourseTagWhereUniqueInput
    create: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput>
  }

  export type DiscourseTagCreateManyTagInputEnvelope = {
    data: DiscourseTagCreateManyTagInput | DiscourseTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type DiscourseTagUpsertWithWhereUniqueWithoutTagInput = {
    where: DiscourseTagWhereUniqueInput
    update: XOR<DiscourseTagUpdateWithoutTagInput, DiscourseTagUncheckedUpdateWithoutTagInput>
    create: XOR<DiscourseTagCreateWithoutTagInput, DiscourseTagUncheckedCreateWithoutTagInput>
  }

  export type DiscourseTagUpdateWithWhereUniqueWithoutTagInput = {
    where: DiscourseTagWhereUniqueInput
    data: XOR<DiscourseTagUpdateWithoutTagInput, DiscourseTagUncheckedUpdateWithoutTagInput>
  }

  export type DiscourseTagUpdateManyWithWhereWithoutTagInput = {
    where: DiscourseTagScalarWhereInput
    data: XOR<DiscourseTagUpdateManyMutationInput, DiscourseTagUncheckedUpdateManyWithoutTagInput>
  }

  export type DiscourseCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutDiscoursesInput
    replies?: ReplyCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseUncheckedCreateWithoutTagsInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    replies?: ReplyUncheckedCreateNestedManyWithoutDiscourseInput
  }

  export type DiscourseCreateOrConnectWithoutTagsInput = {
    where: DiscourseWhereUniqueInput
    create: XOR<DiscourseCreateWithoutTagsInput, DiscourseUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutDiscoursesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutDiscoursesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutDiscoursesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutDiscoursesInput, TagUncheckedCreateWithoutDiscoursesInput>
  }

  export type DiscourseUpsertWithoutTagsInput = {
    update: XOR<DiscourseUpdateWithoutTagsInput, DiscourseUncheckedUpdateWithoutTagsInput>
    create: XOR<DiscourseCreateWithoutTagsInput, DiscourseUncheckedCreateWithoutTagsInput>
    where?: DiscourseWhereInput
  }

  export type DiscourseUpdateToOneWithWhereWithoutTagsInput = {
    where?: DiscourseWhereInput
    data: XOR<DiscourseUpdateWithoutTagsInput, DiscourseUncheckedUpdateWithoutTagsInput>
  }

  export type DiscourseUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutDiscoursesNestedInput
    replies?: ReplyUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutDiscourseNestedInput
  }

  export type TagUpsertWithoutDiscoursesInput = {
    update: XOR<TagUpdateWithoutDiscoursesInput, TagUncheckedUpdateWithoutDiscoursesInput>
    create: XOR<TagCreateWithoutDiscoursesInput, TagUncheckedCreateWithoutDiscoursesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutDiscoursesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutDiscoursesInput, TagUncheckedUpdateWithoutDiscoursesInput>
  }

  export type TagUpdateWithoutDiscoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutDiscoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscourseCreateManyAuthorInput = {
    id?: string
    slug: string
    title: string
    url: string
    domain: string
    imageUrl?: string | null
    description?: string | null
    note?: string | null
    type: string
    replyCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReplyCreateManyUserInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    parentId?: string | null
  }

  export type DiscourseUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUpdateManyWithoutDiscourseNestedInput
    tags?: DiscourseTagUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ReplyUncheckedUpdateManyWithoutDiscourseNestedInput
    tags?: DiscourseTagUncheckedUpdateManyWithoutDiscourseNestedInput
  }

  export type DiscourseUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    replyCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReplyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourse?: DiscourseUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutRepliesNestedInput
    replies?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReplyCreateManyDiscourseInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    parentId?: string | null
  }

  export type DiscourseTagCreateManyDiscourseInput = {
    tagId: string
  }

  export type ReplyUpdateWithoutDiscourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    parent?: ReplyUpdateOneWithoutRepliesNestedInput
    replies?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutDiscourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    replies?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutDiscourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscourseTagUpdateWithoutDiscourseInput = {
    tag?: TagUpdateOneRequiredWithoutDiscoursesNestedInput
  }

  export type DiscourseTagUncheckedUpdateWithoutDiscourseInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscourseTagUncheckedUpdateManyWithoutDiscourseInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type ReplyCreateManyParentInput = {
    id?: string
    content: string
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
    discourseId: string
    userId: string
  }

  export type ReplyUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourse?: DiscourseUpdateOneRequiredWithoutRepliesNestedInput
    user?: UserUpdateOneRequiredWithoutRepliesNestedInput
    replies?: ReplyUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    replies?: ReplyUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ReplyUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    discourseId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscourseTagCreateManyTagInput = {
    discourseId: string
  }

  export type DiscourseTagUpdateWithoutTagInput = {
    discourse?: DiscourseUpdateOneRequiredWithoutTagsNestedInput
  }

  export type DiscourseTagUncheckedUpdateWithoutTagInput = {
    discourseId?: StringFieldUpdateOperationsInput | string
  }

  export type DiscourseTagUncheckedUpdateManyWithoutTagInput = {
    discourseId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}