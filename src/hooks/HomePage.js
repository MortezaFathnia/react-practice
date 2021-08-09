import React, { useState } from 'react';
import DynamicForm from "./DynamicForm";
import PageWrapper from "../components/Common/PageWrapper";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

const labels = ['New Task'];

const HomePage = () => {

    const [isExtendedForm, setIsExtendedForm] = useState(false);

    const handleChangeExtended = (_isExtendedForm) => {setIsExtendedForm(!_isExtendedForm)};

    return (
        <PageWrapper>
            <DynamicForm labels={labels} isExtendedForm={isExtendedForm} />
        </PageWrapper>
    );
};

export default HomePage;
