import { Bitfield } from "./../sparse-bitfield/mod.ts";

/** Reads an uint32 from the specified buffer offset. */
function readUint32BE(buf: Uint8Array, offset: number): number {
  return (
    (buf[offset + 0] << 24) |
    (buf[offset + 1] << 16) |
    (buf[offset + 2] << 8) |
    buf[offset + 3]
  );
}

const mem: Uint8Array = Deno.readFileSync("./code_points.mem");
let offset: number = 0;

/** Loads each code points sequence from buffer. */
function read(): Bitfield {
  const size: number = readUint32BE(mem, offset);
  offset += 4;

  const codepoints = mem.slice(offset, offset + size);
  offset += size;

  return new Bitfield({ buffer: codepoints });
}

/** Reexport the bitfield type. */
export { Bitfield } from "./../sparse-bitfield/mod.ts";

/** Loads code points represented as bitfields. */
export function loadCodePoints(): { [key: string]: Bitfield } {
  return {
    unassigned_code_points: read(),
    commonly_mapped_to_nothing: read(),
    non_ASCII_space_characters: read(),
    prohibited_characters: read(),
    bidirectional_r_al: read(),
    bidirectional_l: read()
  };
}
