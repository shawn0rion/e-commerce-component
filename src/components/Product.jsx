import styled from "styled-components";

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  .seller {
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 15px;
  }

  .description {
    margin-bottom: 25px;
  }

  .price-wrapper {
    display: flex;
    gap: 20px;
  }

  .special-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Product(props) {
  const { seller, title, description, originalPrice, retailPrice, percentOff } =
    props;

  return (
    <StyledProduct>
      <p className="seller"> {seller}</p>
      <h2 className="title"> {title}</h2>
      <p className="description"> {description}</p>
      <div className="price-wrapper">
        <p className="price">
          {/* if percentOff is not 0, then render discount price*/}$
          {retailPrice.toFixed(2)}
        </p>
        {/* if percentOff is not 0, then show %off and original price*/}
        {percentOff !== 0 && (
          <div className="special-pricing">
            <p className="percent-off"> {percentOff}%</p>
            <p className="original-price"> ${originalPrice.toFixed(2)}</p>
          </div>
        )}
      </div>
    </StyledProduct>
  );
}
