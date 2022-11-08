import PropTypes from 'prop-types';
import { Box } from "components/Box";
import { LabelStyled, InputStyled } from "./Filter.styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value))
    console.log('setFilter', setFilter(e.currentTarget.value));
    };
    
    return (
        <Box mb={4}>
            <LabelStyled>
                Find contacts by name
                <InputStyled type="text" value={filter} onChange={changeFilter}/>
            </LabelStyled>
        </Box>
    )
};

Filter.prototype = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};