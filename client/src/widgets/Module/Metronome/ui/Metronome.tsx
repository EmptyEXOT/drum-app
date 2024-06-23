import React, {ReactNode, FC} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";

export interface MetronomeProps {
}

export type MetronomeComponent = FC<MetronomeProps>;

export const Metronome: FC<MetronomeProps> = ({
                                                  ...props
                                              }) => {
    return (
        <div>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
            <Typo.H3>Metronome</Typo.H3>
        </div>
    );
};
