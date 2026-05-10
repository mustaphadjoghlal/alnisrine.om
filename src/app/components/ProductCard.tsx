import { Plus, Eye } from "lucide-react";
import type { Product } from "../types";
import { StarRating } from "./StarRating";

export function ProductCard({
  product,
  onAdd,
  onView,
}: {
  product: Product;
  onAdd: (p: Product) => void;
  onView: (p: Product) => void;
}) {
  const displayPrice = product.sizes.length > 0 ? product.sizes[0].price : product.price;
  const hasMoreSizes = product.sizes.length > 1;

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-2 end-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide">
            الأكثر مبيعاً
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              نفد المخزون
            </span>
          </div>
        )}
        <button
          onClick={() => onView(product)}
          className="absolute bottom-2 start-2 bg-white/95 text-foreground p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white"
        >
          <Eye size={14} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            {product.subcategory}
          </span>
          {product.sizes.length > 0 && (
            <span className="text-[10px] text-muted-foreground">
              {product.sizes[0].label}
              {hasMoreSizes && ` +${product.sizes.length - 1}`}
            </span>
          )}
        </div>
        <h3 className="font-bold text-foreground text-sm mb-1">{product.name}</h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
<div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
          <div className="flex items-baseline gap-1">
            {hasMoreSizes && (
              <span className="text-[10px] text-muted-foreground">يبدأ من</span>
            )}
            <span className="text-xl font-black text-primary">
              {displayPrice.toFixed(3)}
            </span>
            <span className="text-xs text-muted-foreground">ر.ع</span>
          </div>
          <button
            onClick={() => onAdd(product)}
            disabled={!product.inStock}
            className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <Plus size={12} />
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
