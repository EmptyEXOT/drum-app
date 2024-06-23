import React, {ReactNode, FC} from 'react';

interface AppProps {
    children?: ReactNode,
}

export const App: FC<AppProps> = ({
                                      children,
                                      ...props
                                  }) => {
    return (
        <div>
            
        </div>
    );
};
