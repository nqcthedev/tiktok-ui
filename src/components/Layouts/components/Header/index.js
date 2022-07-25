import 'tippy.js/dist/tippy.css'; // optional

import React, { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMessage,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import className from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';

const cx = className.bind(styles);
const currentUser = true;
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log('change:', menuItem);
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo.default} alt="logo" />

                <TippyHeadless
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/156686482_2824242284460906_6765100400937334664_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IzuNH9gPqX4AX90ld1C&_nc_ht=scontent-hkg4-1.xx&oh=00_AT-7O8WW3azZ2yJ1cjrCUiE_e0fzRhqOg0WQ7gjdtnOoiA&oe=62FE2FA2"
                                className={cx('user-avatar')}
                                alt="Nguyen Quoc Cuong"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
