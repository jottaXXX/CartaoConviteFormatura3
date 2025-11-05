# API Contracts - Convite de Formatura

## Overview
Este documento define os contratos de API e o plano de integração frontend-backend para o convite digital de formatura.

## Mock Data (Atualmente no Frontend)
**Localização**: `EventDetails.jsx` - simula envio de RSVP com setTimeout

```javascript
// Dados mockados no componente
const handleSubmit = async (e) => {
  // Simulação com setTimeout de 1000ms
  // Exibe toast de sucesso
}
```

## API Endpoints

### 1. POST /api/rsvp
**Descrição**: Cria/salva confirmação de presença (RSVP) no banco de dados

**Request Body**:
```json
{
  "name": "string (required)",
  "attendance": "yes" | "no" (required)
}
```

**Response (Success - 201)**:
```json
{
  "id": "string",
  "name": "string",
  "attendance": "yes" | "no",
  "created_at": "datetime"
}
```

**Response (Error - 400)**:
```json
{
  "detail": "string"
}
```

### 2. GET /api/rsvp (Opcional - Admin)
**Descrição**: Lista todas as confirmações de presença

**Response (Success - 200)**:
```json
[
  {
    "id": "string",
    "name": "string",
    "attendance": "yes" | "no",
    "created_at": "datetime"
  }
]
```

## MongoDB Schema

### Collection: `rsvps`
```javascript
{
  _id: ObjectId,
  id: String (uuid),
  name: String,
  attendance: String, // "yes" or "no"
  created_at: DateTime,
  __v: Number
}
```

## Backend Implementation Plan

### 1. Create MongoDB Model
- File: `/app/backend/models/rsvp.py`
- Define Pydantic model for RSVP
- Add validation rules

### 2. Create API Routes
- File: `/app/backend/server.py`
- Add POST `/api/rsvp` endpoint
- Add GET `/api/rsvp` endpoint (for listing)
- Add error handling

### 3. Frontend Integration
**File to Update**: `/app/frontend/src/pages/EventDetails.jsx`

**Changes**:
```javascript
// BEFORE (Mock)
setTimeout(() => {
  toast({ title: "Confirmação recebida!" });
  setFormData({ name: '', attendance: 'yes' });
  setIsSubmitting(false);
}, 1000);

// AFTER (Real API)
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const response = await axios.post(`${BACKEND_URL}/api/rsvp`, formData);
toast({ title: "Confirmação recebida!" });
setFormData({ name: '', attendance: 'yes' });
setIsSubmitting(false);
```

## Testing Checklist
- [ ] Backend: Test POST /api/rsvp with valid data
- [ ] Backend: Test POST /api/rsvp with invalid data (empty name)
- [ ] Backend: Verify data is saved in MongoDB
- [ ] Frontend: Remove mock setTimeout code
- [ ] Frontend: Replace with axios POST call
- [ ] Frontend: Test form submission
- [ ] Frontend: Verify success toast appears
- [ ] Frontend: Verify error handling

## Notes
- Todas as rotas backend devem usar prefixo `/api`
- Frontend usa `REACT_APP_BACKEND_URL` do arquivo `.env`
- Validação de dados deve ocorrer tanto no frontend quanto backend
- Tratamento de erros deve exibir mensagens apropriadas ao usuário
