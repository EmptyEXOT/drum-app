import React, {ReactNode, FC} from 'react';
import {Alphabet, AlphabetProps} from "@/widgets/Module/Alphabet";
import {AlphabetComponent} from "@/widgets/Module/Alphabet/ui/Alphabet";
import {Metronome, MetronomeComponent, MetronomeProps} from "@/widgets/Module/Metronome/ui/Metronome";
import classNames from "classnames";

interface ModuleProps {
    children?: ReactNode,
}

type ModuleComponent = FC<ModuleProps> & {
    Metronome: MetronomeComponent,
    Alphabet: AlphabetComponent,
}

export const Module: ModuleComponent = ({
                                            children,
                                            ...props
                                        }) => {
    return (
        <div className={classNames('w-full py-4 px-3 border-2 border-solid border-neutral-650 rounded-xl')}>
            {children}
        </div>
    );
};

Module.Alphabet = Alphabet;
Module.Metronome = Metronome;