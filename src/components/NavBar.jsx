import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import DownloadIcon from "@mui/icons-material/Download";

const pages = [
    "Projects",
    "Contact",
    {
        label: "Download CV",
        icon: <DownloadIcon />,
        fileUrl: "public/Alvaro_Perez Pintado_Resume_06-04-2023-14-24-03.pdf",
    },
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleDownloadCV = (fileUrl) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "cv.pdf";
        link.click();
    };

    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {typeof page === "object" ? (
                                            <>
                                                {page.label} {page.icon}
                                            </>
                                        ) : (
                                            page
                                        )}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={
                                    typeof page === "object"
                                        ? () => handleDownloadCV(page.fileUrl)
                                        : handleCloseNavMenu
                                }
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {typeof page === "object" ? (
                                    <>
                                        {page.label} {page.icon}
                                    </>
                                ) : (
                                    page
                                )}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
