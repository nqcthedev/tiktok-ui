import Button from '~/components/Button';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItems = ({ item, onClick }) => {
    const classes = cx('menu-item', {
        separate: item.separate,
    });
    return (
        <Button className={classes} to={item.to} leftIcon={item.icon} onClick={onClick}>
            {item.title}
        </Button>
    );
};

export default MenuItems;
