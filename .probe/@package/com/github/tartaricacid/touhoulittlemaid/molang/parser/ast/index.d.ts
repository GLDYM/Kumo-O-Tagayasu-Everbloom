import { $Function } from "@package/com/github/tartaricacid/touhoulittlemaid/molang/runtime";

declare module "@package/com/github/tartaricacid/touhoulittlemaid/molang/parser/ast" {
    export class $Expression {
    }
    export interface $Expression {
        visit<R>(arg0: $ExpressionVisitor_<R>): R;
    }
    /**
     * Values that may be interpreted as {@link $Expression}.
     */
    export type $Expression_ = ((arg0: $ExpressionVisitor<any>) => any);
    export class $ExpressionVisitor<R> {
    }
    export interface $ExpressionVisitor<R> {
        visit(arg0: $Expression_): R;
        visitDouble(arg0: $DoubleExpression): R;
        visitString(arg0: $StringExpression): R;
        visitCall(arg0: $CallExpression): R;
        visitStatement(arg0: $StatementExpression): R;
        buildExecutionScopeFunction(arg0: $ExecutionScopeExpression): $Function;
        visitUnary(arg0: $UnaryExpression): R;
        visitAssignableVariable(arg0: $AssignableVariableExpression): R;
        visitTernaryConditional(arg0: $TernaryConditionalExpression): R;
        visitStruct(arg0: $StructAccessExpression): R;
        visitBinary(arg0: $BinaryExpression): R;
        visitIdentifier(arg0: $IdentifierExpression): R;
        visitVariable(arg0: $VariableExpression): R;
        visitExecutionScope(arg0: $ExecutionScopeExpression): R;
    }
    /**
     * Values that may be interpreted as {@link $ExpressionVisitor}.
     */
    export type $ExpressionVisitor_<R> = ((arg0: $Expression) => R);
}
