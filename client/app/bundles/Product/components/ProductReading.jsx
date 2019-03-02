import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Frontend from "~/shared/components/layouts/Frontend";
import { Default, Mobile } from "~/shared/components/layouts/responsive";
import ContentPage from "../../../shared/components/layouts/ContentPage";
import InfoBox from "./product/infoBox";
import Content from "./product/content";
import { connect } from "react-redux";
import { fetchProductRequest } from "~/actions";

const InnerContent = ({product, path}) => (
  <div>
    <InfoBox product={product} />
    <Switch>
      <Route path={`${path}/pages/:page_order`} component={Content} />
      <Route exact path={`${path}/`} component={Content} />
    </Switch>
  </div>
);

const RenderCompornent = ({product, path}) => (
  <div>
        <Mobile>
          <ContentPage>
            <InnerContent product={product} path={path}/>
          </ContentPage>
        </Mobile>
        <Default>
          <Frontend>
            <InnerContent product={product} path={path}/>
          </Frontend>
        </Default>
      </div>
)

class ProductReading extends React.Component {
  componentDidMount() {
    const {
      fetchProduct,
      match: {
        params: { product_id }
      }
    } = this.props;

    fetchProduct(product_id);
  }

  componentDidUpdate(prevProps) {
    const {
      fetchProduct,
      match: {
        params: { product_id }
      }
    } = this.props;

    if (prevProps.match.params.product_id === product_id && this.props.product)
      return;

    fetchProduct(product_id);
  }

  render() {
    const {
      match: { path },
      product
    } = this.props;

    return (
      <RenderCompornent product={product} path={path}/>
    );
  }
}

ProductReading.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired,
  fetchProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.productData.currentProduct,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: product_id => dispatch(fetchProductRequest(product_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductReading);
