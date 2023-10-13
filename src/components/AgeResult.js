import propTypes from 'prop-types';


const AgeResult = ({age}) =>{
    return <h2>
        you are {age.years} years old
        </h2>;
};

AgeResult.propTypes={
    age: propTypes.shape({
        years: propTypes.number.isRequired,
        
    })
};

export default AgeResult;