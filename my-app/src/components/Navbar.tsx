import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { AppBar, Toolbar } from "@mui/material";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MenFashion from "@/components/MenFashion";
import AdvanceFilter from "@/components/AdvanceFilter";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [drawer, setDrawer] = React.useState<boolean>(false);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    return (
        <Box className="h-full w-full">
            <AppBar position="static">
                <Toolbar className="flex justify-between w-full">
                    <Box className="flex items-center gap-2">
                        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer"
                                    onClick={() => setDrawer(true)}>
                            <Bars3Icon className="h-5 w-5" />

                        </IconButton>
                        <AdvanceFilter open={drawer} setOpen={setDrawer} drawerWidth={"50%"}/>
                        <Typography variant="h6" component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            Fashion Store
                        </Typography>
                    </Box>

                    <Box className="flex justify-center items-center gap-10">
                        <div
                            className="cursor-pointer hover:font-bold hover:text-lg"
                            onMouseOver={() => setOpen(true)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div>MEN</div>
                            <MenFashion
                                anchorEl={anchorEl}
                                open={open}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        </div>
                        <div>WOMEN</div>
                        <div>KIDS</div>
                    </Box>
                    <Box className="bg-gray-300 flex w-1/4 items-center rounded-md px-2">
                        <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
                        <input
                            className="text-gray-700 p-1 w-full border-none outline-none bg-transparent"
                            type="text"
                            placeholder="Search for products, brands or more..."
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
