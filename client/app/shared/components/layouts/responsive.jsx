import React from "react";
import PropTypes from "prop-types"
import LocResponsive from "react-responsive";
import ContentPage from "./ContentPage";
import Frontend from "./Frontend";

export const Desktop = props => <LocResponsive {...props} minWidth={992} />;
export const Tablet = props => (
  <LocResponsive {...props} minWidth={768} maxWidth={991} />
);
export const Mobile = props => <LocResponsive {...props} maxWidth={767} />;
export const Default = props => <LocResponsive {...props} minWidth={768} />;

const Responsive = ({ children }) => (
    <div>
      <Mobile>
        <ContentPage>
          {children}
        </ContentPage>
      </Mobile>
      <Default>
        <Frontend>
          {children}
        </Frontend>
      </Default>
    </div>
  )

Responsive.propTypes = {
  children: PropTypes.node.isRequired
}

export default Responsive