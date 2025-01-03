import { IconFile, IconFolder } from '@tabler/icons-react'
import React from 'react'

/**
 * The data to display in the tree.
 */
type Node = {
  /**
   * The name of the node.
   */
  name: string
  /**
   * The children of the node.
   */
  children?: Node[]
}

/**
 * The props of {@link Tree}.
 */
type TreeProps = {
  /**
   * The data to display in the tree.
   * @see {@link Node}
   */
  data: Node[]
}

/**
 * The props of {@link Inner}.
 */
type InnerType = {
  /**
   * The data to display in the tree.
   * @see {@link Node}
   */
  data: Node[]
  /**
   * The level of the node.
   */
  level: number
}

const Tree = (props: TreeProps) => {
  return (
    <div className='rounded-lg border bg-pre px-6 py-4'>
      <Inner {...props} level={0} />
    </div>
  )
}

const Inner = (props: InnerType) => {
  const { data, level } = props

  return (
    <>
      {data.map((node) => (
        <React.Fragment key={node.name}>
          <div className='relative flex items-center gap-2'>
            {[...Array.from({ length: level }).keys()].map((i) => (
              <div
                key={i}
                className='absolute h-full w-px -translate-x-1/2 bg-muted'
                style={{
                  left: `calc(${i * 20}px + 22px / 2)`
                }}
              />
            ))}
            <div
              style={{
                paddingLeft: level * 24
              }}
            >
              {node.children ? (
                <IconFolder size={20} />
              ) : (
                <IconFile size={20} />
              )}
            </div>
            <div className='font-fira-code'>{node.name}</div>
          </div>

          {node.children ? (
            <Inner data={node.children} level={level + 1} />
          ) : null}
        </React.Fragment>
      ))}
    </>
  )
}

export default Tree
