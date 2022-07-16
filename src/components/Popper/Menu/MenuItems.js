import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const MenuItems = ({ item, onClick }) => {
    return (
        <Button className={cx('menu-item')} to={item.to} leftIcon={item.icon} onClick={onClick}>
            {item.title}
        </Button>
    );
};

export default MenuItems;
