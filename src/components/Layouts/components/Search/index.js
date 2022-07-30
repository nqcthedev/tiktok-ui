import React, { useEffect, useRef, useState } from 'react';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import TippyHeadless from '@tippyjs/react/headless';
import className from 'classnames/bind';
import styles from './Search.module.scss';

const cx = className.bind(styles);
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`,
                );
                const resData = await res.json();
                setSearchResult(resData.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchData();
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleClickOutside = () => {
        setShowResult(false);
    };

    return (
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleClickOutside}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
};

export default Search;
