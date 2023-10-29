import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-grow flex-col pt-0.5">
        <p className="font-medium ">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!currentQuantity ? (
            !soldOut && (
              <Button onClick={handleAddToCart} type="small">
                Add to cart
              </Button>
            )
          ) : (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity pizzaId={id} currentQty={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
