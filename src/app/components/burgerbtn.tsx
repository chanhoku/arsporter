import { css } from 'styled-system/css'

export default function Burgerbtn() {
    return (
        <button className={css({
            width: '60px',
            height: '60px',
            position: 'relative',
            border: '1px solid #000',
            cursor: 'pointer'
        })}>
            <span
                className={css({
                    width: '30px',
                    height: '1px',
                    bg: '#000',
                    display: 'block',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                })}
            >
            </span>
            <span
                className={css({
                    width: '30px',
                    height: '1px',
                    bg: '#000',
                    display: 'block',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    mt: '-10px'
                })}
            >
            </span>
            <span
                className={css({
                    width: '30px',
                    height: '1px',
                    bg: '#000',
                    display: 'block',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    mt: '10px'
                })}
            >
            </span>
        </button>
    )
}
