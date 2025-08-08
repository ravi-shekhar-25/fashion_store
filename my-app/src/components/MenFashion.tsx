import React from 'react';
import { Divider, Menu } from "@mui/material";

const MenFashion = ({
                        open,
                        anchorEl,
                        handleMouseEnter,
                        handleMouseLeave
                    }: {
    open: boolean;
    anchorEl: HTMLElement | null;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}) => {
    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <div className={'p-8'}>
                <div className="flex items-center gap-5">
                    <div>Shop By:</div>
                    <button className="items-center bg-gray-100 p-2 cursor-pointer hover:bg-gray-300 hover:font-bold">
                        Categories
                    </button>
                    <button className="items-center bg-gray-100 p-2 cursor-pointer hover:bg-gray-300 hover:font-bold">
                        Brands
                    </button>
                    <button className="items-center bg-gray-100 p-2 cursor-pointer hover:bg-gray-300 hover:font-bold">
                        Festive Seasons
                    </button>
                </div>
                <Divider />
                <div className={'grid grid-cols-4 items-start pt-5'}>
                    <div className="flex flex-col gap-2">
                        <div className={'text-red-400'}>Topwear</div>
                        <div>T-shirts</div>
                        <div>Sweat-shirts</div>
                        <div>Casual shirts</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={'text-red-400'}>Bottomwear</div>
                        <div>Shorts</div>
                        <div>Casual Trousers</div>
                        <div>Formal Trousers</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={'text-red-400'}>Footwear</div>
                        <div>Casual Shoes</div>
                        <div>Sports Shoes</div>
                        <div>Sneakers</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className={'text-red-400'}>Sports & Active Wear</div>
                        <div>Sports Shoes</div>
                        <div>Sports Pant</div>
                        <div>Sports Sandals</div>
                    </div>
                </div>
            </div>
        </Menu>
    );
};

export default MenFashion;
