# ===============
# Global Aruments
# ===============
ARG APP_NAME=bookmarks-frontend
ARG NODE_VERSION=12.13-alpine

# ================
# STAGE 0: Install
# ================
FROM node:${NODE_VERSION} as install

# -----------------
# Stage 0 Arguments
# -----------------
ARG APP_NAME

# -----------------------------
# Stage 0 Environment Variables
# -----------------------------
ENV APP_DIR=/var/www/${APP_NAME}

# --------------------------------------------------------------
# Stage 0, Layer 0: OS config and system dependency installation
# --------------------------------------------------------------
RUN mkdir -p ${APP_DIR};

# ------------------------------------------------------------------
# Stage 0, Layer 1: Application node modules dependency installation
# ------------------------------------------------------------------
WORKDIR ${APP_DIR}

# Copy base npm files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# ==========================
# Stage 1: Build Application
# ==========================
FROM node:${NODE_VERSION} as build

# -----------------
# Stage 1 Arguments
# -----------------
ARG APP_NAME

# -----------------------------
# Stage 1 Environment Variables
# -----------------------------
ENV APP_DIR=/var/www/${APP_NAME}

# --------------------------------------------------------------
# Stage 1, Layer 0: OS config and system dependency installation
# --------------------------------------------------------------
RUN mkdir -p ${APP_DIR};

# ------------------------------------------
# Stage 1, Layer 1: Application installation
# ------------------------------------------
WORKDIR ${APP_DIR}

# Get installed node_modules from installation stage
COPY --from=install ${APP_DIR}/node_modules ./node_modules

# Get application source
COPY . .

# -----------------------------------
# Stage 1, Layer 2: Application build
# -----------------------------------
RUN yarn build

# ===============
# Stage 2: Server
# ===============
FROM nginx:alpine

# -----------------
# Stage 2 Arguments
# -----------------
ARG APP_NAME

# -----------------------------
# Stage 2 Environment Variables
# -----------------------------
ENV APP_DIR=/var/www/${APP_NAME}

# -----------------------------------
# Stage 2, Layer 2: Application build
# -----------------------------------
COPY --from=build ${APP_DIR}/build /usr/share/nginx/html

# -------------------------------
# Stage 2, Layer 3: Expose assets
# -------------------------------
EXPOSE 80
