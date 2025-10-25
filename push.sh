#!/bin/bash
# Script automático para subir los cambios al repositorio Tita en GitHub

echo "🧩 Actualizando repositorio Tita..."

# Agregar todos los cambios
git add .

# Pedir mensaje de commit
read -p "📝 Escribe un mensaje para el commit: " mensaje

# Si el usuario no escribe nada, usar mensaje por defecto
if [ -z "$mensaje" ]; then
  mensaje="Actualización automática $(date)"
fi

# Hacer commit
git commit -m "$mensaje"

# Subir los cambios
git push origin main

echo "✅ Cambios subidos correctamente a GitHub (locaslstod/Tita)"
