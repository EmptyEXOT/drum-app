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
                    'md:text-xl'
                )}
        >
            Our innovative ultimate tool for drummers of all levels.
        </Typo.P>
    );
};
