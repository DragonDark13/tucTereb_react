import React, {ReactNode} from 'react';

interface IPageSectionWrapper {
    children: ReactNode,
    id?: string;
}

const PageSectionWrapper = ({children, id}: IPageSectionWrapper) => {
    return (
        <section id={id ? id : ""} className="sb-section
                  sb-section-opt-light option-title-show-decoration-square">
            <div className="container">
                <div className="row sb-row-opt-padding-bottom-large sb-row-opt-padding-top-large align-items-center">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default PageSectionWrapper;
