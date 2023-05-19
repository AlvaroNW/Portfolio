import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadIcon from "@mui/icons-material/Download";



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
    const handleDownloadCV = (fileUrl) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "cv.pdf";
        link.click();
    };

	return (
		<header>
			<img src="src/assets/Logo.PNG"></img>
			<nav ref={navRef}>
				<a href="/#">Projects</a>
				<a href="/#">Contact</a>
				<a href="/#" onClick={handleDownloadCV}>Download CV <span><DownloadIcon /></span></a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;