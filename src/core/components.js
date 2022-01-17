export const combineWrappers = (A,B) => ({ children }) => <A>
    <B>
        {children}
    </B>
</A>