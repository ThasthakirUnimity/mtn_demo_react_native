import React, { useEffect } from "react";
import { useTourGuideController } from 'rn-tourguide'
import { useDispatch } from "react-redux";

import { updateQuicktourShown } from '@src/store/reducers/setting'

const TourGuideListener = () => {
    const { eventEmitter } = useTourGuideController()
    const dispatch = useDispatch()

    useEffect(() => {
        eventEmitter.on('stop', handleOnStop)
        return () => {
            eventEmitter.off('stop', handleOnStop)
        }
    }, [])

    const handleOnStop = () => {
        dispatch(updateQuicktourShown(true))
    }

    return null
}

export default TourGuideListener