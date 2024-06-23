import React, {ReactNode, FC} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";

export interface AlphabetProps {
}

export type AlphabetComponent = FC<AlphabetProps>

export const Alphabet: AlphabetComponent = ({
                                                ...props
                                            }) => {
    return (
        <div>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
            <Typo.H3>Alphabet</Typo.H3>
        </div>
    );
};
