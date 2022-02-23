import React, {FC, createContext, useState, useEffect} from 'react';

export type Pitch = '4_SEAM_FASTBALL' | '2_SEAM_FASTBALL' | 'CURVEBALL' | 'SLIDER' | undefined

interface IBaseballContext {
    pitch: Pitch | undefined;
    isRightHandedPitcher: boolean;
    handleSetPitcherHand: (isRighHandedPitcher: boolean) => void;
    handleSetPitchType: (pitch: Pitch) => void;
}

export const BaseballContext = createContext<IBaseballContext>({
    pitch: undefined,
    isRightHandedPitcher: true,
    handleSetPitcherHand: () => null,
    handleSetPitchType: () => null
});

const BaseballContextProvider: FC = ({children}) => {
    const [pitch, setPitch] = useState<Pitch>();
    const [isRightHandedPitcher, setPitcherHand] = useState<boolean>(true);
    
    const handleSetPitchType = (newState: Pitch) => {
        setPitch(newState)
    }

    useEffect(() => {
        setPitch(pitch);
    }, [pitch])

    const handleSetPitcherHand = (newState: boolean) => {
        setPitcherHand(newState)
    }

    useEffect(() => {
        setPitcherHand(isRightHandedPitcher)
    }, [isRightHandedPitcher])


    const context = {
        pitch,
        isRightHandedPitcher,
        handleSetPitcherHand,
        handleSetPitchType,
    };

    return <BaseballContext.Provider value={context}>{children}</BaseballContext.Provider>
}

export default BaseballContextProvider;