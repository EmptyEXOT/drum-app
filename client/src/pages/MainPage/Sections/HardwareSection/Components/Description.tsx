import React, {ReactNode, FC} from 'react';
import {Typo, TypoVariant} from "@/shared/ui/Typo/Typo";
import classNames from "classnames";

interface DescriptionProps {
    children?: ReactNode,
}

export const Description: FC<DescriptionProps> = ({
                                                      children,
                                                      ...props
                                                  }) => {
    return (
        <Typo.P variant={TypoVariant.SecondaryLight}
                className={classNames(
                    'order-3',
                )}
        >
            Take your drumming to the next level with our digital drum pad! Whether you're just starting out or a
            seasoned pro, our cool features and easy-to-use interface will help you level up your skills.
        </Typo.P>
    );
};
