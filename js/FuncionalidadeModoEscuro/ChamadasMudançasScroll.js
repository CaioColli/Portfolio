export function chamadasScroll() {
    const style = document.createElement('style')
    const fundoScrollDark = '::-webkit-scrollbar-track { background-color: #774069; }'
    const fundoScrollClaro = '::-webkit-scrollbar-track { background-color: #6FDCBF; }'

    return [style, fundoScrollClaro, fundoScrollDark]
}