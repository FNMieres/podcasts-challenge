import type { PropsWithChildren } from "react";
import LinkMui from "@mui/material/Link";
import type { LinkProps as LinkMuiProps } from "@mui/material/Link";
import { Link as RouterDomLink } from "react-router-dom";
import type { LinkProps as LinkDomProps } from "react-router-dom";

function RouterLink(props: PropsWithChildren<LinkMuiProps & LinkDomProps>) {
  const { children } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LinkMui component={RouterDomLink} {...props}>
      {children}
    </LinkMui>
  );
}

export default RouterLink;
