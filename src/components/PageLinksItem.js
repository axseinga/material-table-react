import StyledPageLinksItem from "./styled/PageLinksItem.styled";

const PageLinksItem = (props) => {
    return (
        <StyledPageLinksItem
            href="#"
            onClick={() => props.setPage(props.index + 1)}
            isActive={props.isActive}
        >
            {props.index + 1}
        </StyledPageLinksItem>
    );
};

export default PageLinksItem;
