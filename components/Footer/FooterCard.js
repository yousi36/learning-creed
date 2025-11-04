import NextLink from "next/link";
import { Typography, Link as MuiLink, Card } from "@mui/material";
export default function FooterCard({ title, links }) {
  return (
    <Card
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {links.map((link) => (
        <NextLink key={link.label} href={link.href} passHref legacyBehavior>
          <MuiLink
            color="inherit"
            underline="hover"
            sx={{ display: "block", mb: 0.5, fontSize: "0.9rem" }}
          >
            {link.label}
          </MuiLink>
        </NextLink>
      ))}
    </Card>
  );
}
