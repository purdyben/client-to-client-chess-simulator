import React, {Component} from 'react';

class Enums extends React.Component {

    const StepTypeValue = {
        stepTypeId: 0,
        isDuty: false,
        isVariable: false,
        isOptional: false,
        isGateway: false,
        isXor: false,
        isAnd: false,
        isCombined: false,
    };

    renderSquare(i) {
        return <Square value={i}/>;
    }
}
export default Enums;