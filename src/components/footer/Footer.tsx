


import { Box, Typography } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AdjustIcon from '@mui/icons-material/Adjust';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import AddCardIcon from '@mui/icons-material/AddCard';
import typography from '../../theme/typography';

function Footer() {
    return (
        <Box sx={{ position: 'relative', top: { xs: 310, sm: 0, md: 6 } }}>
            {/* Top Section */}
            <Box sx={{ width: "100%",minHeight:"30vh", display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        width: "80%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(6, 1fr)",
                        },
                        padding: 2,
                        paddingY: 4,
                        gap: 2,
                    }}
                >
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: 50,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Box>
                                <AddIcCallIcon />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: 10 }}>
                                    Get In Touch
                                </Typography>
                                <Typography>
                                    XXXXXXX
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Bottom Section */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "80%", display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4 }}>
                    {/* Left Section */}
                    <Box sx={{ width: { xs: "100%", md: "40%" }, display: "flex", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <AdjustIcon fontSize="medium" />
                            <Typography>COCA</Typography>
                        </Box>
                        <Box>
                            <Typography sx={typography.description}>
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <XIcon />
                            <LinkedInIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Box sx={{ width: { xs: "100%", md: "60%" }, display: 'flex', flexDirection: "row", gap: 4, justifyContent: "space-around" }}>
                        <Box>
                            {Array(6).fill("About").map((item, index) => (
                                <Typography key={index}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        <Box>
                            {Array(4).fill("About").map((item, index) => (
                                <Typography key={index}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                        <Box>
                            {Array(4).fill("About").map((item, index) => (
                                <Typography key={index}>
                                    {item}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* All Right Reserved Section */}
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                <Box
                    sx={{
                        width: "80%",
                        backgroundColor: "#F5F5F5",
                        display: 'flex',
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: { xs: "center", sm: "flex-end" },
                        alignItems: "center",
                        gap: { xs: 2, sm: 40 },
                        borderRadius: 1,
                        padding: 2,
                    }}
                >
                    <Box>
                        <Typography variant="body2" align="center">
                            All Right reserved @xxxx222
                        </Typography>
                    </Box>
                    <Box sx={{display:"flex",gap:2}}>
                       <GoogleIcon />
                       <AppleIcon />
                       <AddCardIcon />
                       <AppleIcon />

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;
