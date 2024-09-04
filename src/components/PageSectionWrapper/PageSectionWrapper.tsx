import {ReactNode} from "react";

interface IPageSectionWrapper {
    children: ReactNode,
    id?: string;
    variant?: "dark" | "light",
}

const PageSectionWrapper = ({children, id, variant="light"}: IPageSectionWrapper) => {
    return (
        <section id={id ? id : ""}
                 className={"sb-section option-title-show-decoration-square "+ (variant==='light' ? "sb-section-opt-light " : "sb-section-opt-dark")}>
            <div className="container">
                <div className="row sb-row-opt-padding-bottom-large sb-row-opt-padding-top-large align-items-center">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default PageSectionWrapper;
