import React, {FC} from 'react';
import {Typo} from "@/shared/ui/Typo/Typo";
import classNames from "classnames";
import {Switch} from "@/shared/ui/Switch/ui/Switch";
import {SwitchProvider} from "@/shared/ui/Switch/provider/Switch.provider";
import SoundOn from 'assets/Sound_on.svg'
import SoundOff from 'assets/Sound_off.svg'
import {mute, unmute} from "@/app/metronome";
import {Button, ButtonVariant} from "@/shared/ui/Button/Button";
import {getTransport} from "tone";


export interface MetronomeProps {
}

export type MetronomeComponent = FC<MetronomeProps>;

export const Metronome: FC<MetronomeProps> = ({
                                                  ...props
                                              }) => {
    return (
        <SwitchProvider isOnDefault={true}>
            <div className={classNames('flex flex-col gap-3')}>
                <div className={classNames('flex justify-between')}>
                    <Typo.H2>Metronome</Typo.H2>
                    <Switch
                        switchCb={(switchState) => {
                            switchState ? mute() : unmute()
                        }}
                        iconOn={<SoundOn className={classNames('w-[65%]')}/>}
                        iconOff={<SoundOff className={classNames('w-[65%]')}/>}
                    />
                </div>
                <Button
                    variant={ButtonVariant.Primary}
                    onClick={() => {
                        getTransport().bpm.value += 10
                    }}
                >
                    +
                </Button>
                <Button
                    variant={ButtonVariant.Primary}
                    onClick={() => {
                        getTransport().bpm.value -= 10

                    }}
                >
                    -
                </Button>
            </div>
        </SwitchProvider>
    );
};
