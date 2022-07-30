import React, { forwardRef, useState } from 'react';

import classNames from 'classnames';
import image from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ fallback: customFallback = image.noImage, className, src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
