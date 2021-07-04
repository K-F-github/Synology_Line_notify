FROM denoland/deno:1.11.5

# The port that your application listens to.
EXPOSE 3000

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY PostToLine.js .
RUN deno cache PostToLine.js

CMD ["run", "--allow-net", "--unstable","PostToLine.js"]
