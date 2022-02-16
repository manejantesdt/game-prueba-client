import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

const Players = (props) => {
    const { id } = props.match.params
    const { game, } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
}