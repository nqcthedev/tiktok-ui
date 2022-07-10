import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import className from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cx = className.bind(styles);
const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt="logo" />
                </div>
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
                <div className={cx('action')}>123</div>
            </div>
        </header>
    );
};

export default Header;
