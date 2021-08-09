# useCallback vs useMemo

`useMemo`: takes a function and it will return the return value of the valid function

`useCallback`: takes a function and useCallback will return the function.

```js
const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
}, [number]);
```
the function above will make `getItems` a function

```js
const getItems = useMemo(() => {
    return [number, number + 1, number + 2];
}, [number]);
```
the getItems above will return [number, number + 1, number + 2]

:arrow_right: only reason you want to use useCallback is if you need the referencial equality. 