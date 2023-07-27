import styled from "styled-components";
import menuIcon from "/images/icon-menu.svg";
import cartIcon from "/images/icon-cart.svg";

const StyledHeader = styled.header``;

export default function Header(props) {
  const { onCartClick, onSidebarClick } = props;

  //   has buttons fro cart and sidebar
  return (
    <StyledHeader>
      {/* remember to hide the menu button if not mobile */}
      <button onClick={onSidebarClick}>
        <img src={menuIcon} alt="menu" />
      </button>
      <button onClick={onCartClick}>
        <img src={cartIcon} alt="cart" />
      </button>
    </StyledHeader>
  );
}
