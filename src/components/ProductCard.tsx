import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { Product, SizeOption, ColorOption } from "../types";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product, size: SizeOption, color?: ColorOption) => void;
  onView: (product: Product) => void;
}

export function ProductCard({ product, onAdd, onView }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<SizeOption>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState<ColorOption | undefined>(
    product.colors.length > 0 ? product.colors[0] : undefined
  );

  const currentPrice = selectedSize.price + (selectedColor?.price || 0);

  return (
    <div className="bg-white border border-border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg">
      {/* صورة المنتج */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.featured && (
          <span className="absolute top-2 end-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
            الأكثر مبيعاً
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/75 flex items-center justify-center">
            <span className="text-sm font-semibold text-destructive">غير متوفر</span>
          </div>
        )}
      </div>

      {/* معلومات المنتج */}
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        {/* التقييم */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={12}
                className={i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        {/* اختيار الحجم */}
        <div className="mb-3">
          <label className="text-xs font-semibold mb-1 block">الحجم:</label>
          <select
            value={product.sizes.indexOf(selectedSize)}
            onChange={(e) => setSelectedSize(product.sizes[parseInt(e.target.value)])}
            className="w-full px-2 py-1 text-xs border border-border rounded"
          >
            {product.sizes.map((size, idx) => (
              <option key={idx} value={idx}>
                {size.size} ({size.unit})
              </option>
            ))}
          </select>
        </div>

        {/* اختيار اللون */}
        {product.colors.length > 0 && (
          <div className="mb-3">
            <label className="text-xs font-semibold mb-1 block">اللون:</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor?.color === color.color ? "border-primary" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.color }}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* السعر والزر */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{currentPrice.toFixed(2)}</span>
            <span className="text-xs text-muted-foreground mr-1">ر.ع</span>
          </div>
          <button
            onClick={() => onAdd(product, selectedSize, selectedColor)}
            disabled={!product.inStock}
            className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ShoppingCart size={16} />
          </button>
        </div>

        {/* زر العرض */}
        <button
          onClick={() => onView(product)}
          className="w-full mt-2 text-xs text-primary hover:underline"
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}
