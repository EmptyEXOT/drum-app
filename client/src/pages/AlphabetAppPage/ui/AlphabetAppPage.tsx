import React, {FC, ReactNode, useEffect} from 'react';
import {useSidebarDispatch} from "@/widgets/Sidebar/hooks/useSidebarDispatch";
import {SidebarActionType} from "@/widgets/Sidebar/types";
import {Modules} from "@/widgets/Module/types/Modules";

interface AlphabetAppPageProps {
    children?: ReactNode,
}

const AlphabetAppPage: FC<AlphabetAppPageProps> = ({
                                                              children,
                                                              ...props
                                                          }) => {
    const dispatch = useSidebarDispatch();

    useEffect(() => {
        dispatch({type: SidebarActionType.SetModules, payload: {modules: [Modules.Metronome, Modules.Alphabet]}})
    }, []);

    return (
        <div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
            <div>AlphabetAlphabetAlphabetAlphabetAlphabetAlphabetAlphabet</div>
        </div>
    );
};

export default AlphabetAppPage