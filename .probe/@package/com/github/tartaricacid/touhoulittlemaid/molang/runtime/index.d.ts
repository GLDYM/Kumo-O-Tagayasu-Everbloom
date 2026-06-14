import { $ExpressionVisitor, $Expression_ } from "@package/com/github/tartaricacid/touhoulittlemaid/molang/parser/ast";
import { $Object } from "@package/java/lang";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/molang/runtime" {
    export class $ExecutionContext<TEntity> {
    }
    export interface $ExecutionContext<TEntity> {
        "eval"(arg0: $Expression_): $Object;
        entity(): TEntity;
    }
    export class $ExpressionEvaluator<TEntity> {
        static evaluator<TEntity>(arg0: TEntity): $ExpressionEvaluator<TEntity>;
        static evaluator(): $ExpressionEvaluator<any>;
    }
    export interface $ExpressionEvaluator<TEntity> extends $ExecutionContext<TEntity>, $ExpressionVisitor<$Object> {
        "eval"(arg0: $Expression_): $Object;
        createChild(): $ExpressionEvaluator<TEntity>;
        createChild<TNewEntity>(arg0: TNewEntity): $ExpressionEvaluator<TNewEntity>;
        popReturnValue(): $Object;
    }
}
